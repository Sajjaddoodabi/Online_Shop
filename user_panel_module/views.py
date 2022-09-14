import random

from django.contrib.auth.decorators import login_required
from django.db.models import Count
from django.http import HttpRequest, JsonResponse, HttpResponse
from django.shortcuts import render
from django.template.loader import render_to_string
from django.utils.crypto import get_random_string
from django.views import View
from django.views.generic import TemplateView

from account_module.models import User, Address, AdminMessages
from order_module.models import Order, OrderDetail
from product_module.models import Product, ProductComment
from user_panel_module.forms import EditInformationForm
from utils.email_service import send_email


class Dashboard(TemplateView):
    template_name = 'user_panel/dashboard.html'

    def get_context_data(self, **kwargs):
        context = super(Dashboard, self).get_context_data()
        request = self.request
        context['delivered_orders'] = Order.objects.filter(user_id=request.user.id, is_paid=True).count()
        context['current_orders'] = Order.objects.filter(user_id=request.user.id, is_paid=False).count()
        context['recent_views'] = Product.objects.filter(
            is_active=True, is_delete=False, productvisit__user_id=request.user.id).order_by('-productvisit__date')
        context['recent_bought'] = OrderDetail.objects.filter(order__user_id=request.user.id, order__is_paid=True)
        return context


class Addresses(TemplateView):
    template_name = 'user_panel/addresses.html'

    def get_context_data(self, **kwargs):
        context = super(Addresses, self).get_context_data()
        context['addresses'] = Address.objects.filter(user_id=self.request.user.id)

        return context


class Opinions(TemplateView):
    template_name = 'user_panel/opinions.html'

    def get_context_data(self, **kwargs):
        context = super(Opinions, self).get_context_data()
        context['comments'] = ProductComment.objects.filter(user_id=self.request.user.id)
        return context


class Messages(TemplateView):
    template_name = 'user_panel/messages.html'

    def get_context_data(self, **kwargs):
        context = super(Messages, self).get_context_data()
        context['messages'] = AdminMessages.objects.filter(user_id=self.request.user.id, is_delete=False)
        return context


class UserOrders(TemplateView):
    template_name = 'user_panel/user_orders.html'

    def get_context_data(self, **kwargs):
        context = super(UserOrders, self).get_context_data()
        context['delivered_orders'] = Order.objects.filter(user_id=self.request.user.id, is_paid=True)
        context['current_order'] = Order.objects.filter(user_id=self.request.user.id, is_paid=False).first()
        return context


class RecentViews(TemplateView):
    template_name = 'user_panel/resent_visits.html'

    def get_context_data(self, **kwargs):
        context = super(RecentViews, self).get_context_data()
        context['recent_views'] = Product.objects.filter(
            is_active=True, is_delete=False, productvisit__user_id=self.request.user.id).order_by('-productvisit__date')
        return context


class EditUserInfo(View):
    def get(self, request: HttpRequest):
        current_user = User.objects.filter(id=request.user.id).first()
        edit_profile_form = EditInformationForm(instance=current_user)

        context = {
            'current_user': current_user,
            'edit_profile_form': edit_profile_form
        }
        return render(request, 'user_panel/edit_user_info.html', context)

    def post(self, request: HttpRequest):
        current_user = User.objects.filter(id=request.user.id).first()
        edit_profile_form = EditInformationForm(request.POST, request.FILES, instance=current_user)
        email = current_user.email
        mobile = current_user.mobile

        if edit_profile_form.is_valid():
            edit_profile_form.save(commit=True)

        if current_user.email != email:
            current_user.is_active = False
            current_user.email_active_code = get_random_string(72)

            send_email(
                'account activation email',
                current_user.email,
                {'user': current_user},
                'emails/activate_account.html'
            )

        if current_user.mobile != mobile:
            if current_user.email is None:
                current_user.is_active = False
                current_user.mobile_active_code = random.randint(10000, 100000)

                # todo send sms

        context = {
            'current_user': current_user,
            'edit_profile_form': edit_profile_form
        }
        return render(request, 'user_panel/edit_user_info.html', context)


def user_panel_menu_component(request: HttpRequest):
    user = request.user
    context = {
        'user': user
    }
    return render(request, 'user_panel/components/user_panel_menu.html', context)


@login_required
def user_basket(request: HttpRequest):
    current_order, created = Order.objects.prefetch_related('orderdetail_set').get_or_create(
        user_id=request.user.id, is_paid=False)

    total_amount = current_order.calculate_total_price()
    context = {
        'order': current_order,
        'total_price': total_amount,
    }

    return render(request, 'user_panel/cart.html', context)


@login_required
def change_order_detail(request: HttpRequest):
    detail_id = request.GET.get('detail_id')
    state = request.GET.get('state')

    if detail_id is None or state is None:
        return JsonResponse({
            'status': 'detail or state is invalid'
        })

    order_detail = OrderDetail.objects.filter(id=detail_id, order__user_id=request.user.id,
                                              order__is_paid=False).first()

    if order_detail is None:
        return JsonResponse({
            'status': 'detail not found'
        })

    if state == 'increase':
        if order_detail.count < 10:
            order_detail.count += 1
            order_detail.save()

    elif state == 'decrease':
        if order_detail.count == 1:
            pass
        else:
            order_detail.count -= 1
            order_detail.save()
    else:
        return JsonResponse({
            'status': 'invalid state'
        })

    current_order, created = Order.objects.prefetch_related('orderdetail_set').get_or_create(
        user_id=request.user.id, is_paid=False)

    total_price = current_order.calculate_total_price()

    context = {
        'total_price': total_price,
        'order': current_order,
    }

    data = render_to_string('user_panel/includes/cart_content.html', context)

    return JsonResponse({
        'status': 'success',
        'body': data
    })


@login_required
def remove_product_from_cart(request: HttpRequest):
    detail_id = request.GET.get('detail_id')

    if detail_id is None:
        return JsonResponse({
            'status': 'detail_id_not_found'
        })

    delete_count, delete_dict = OrderDetail.objects.filter(id=detail_id, order__user_id=request.user.id,
                                                           order__is_paid=False).delete()

    if delete_count == 0:
        return JsonResponse({
            'status': 'order_detail_not_found'
        })

    current_order, created = Order.objects.prefetch_related('orderdetail_set').get_or_create(
        user_id=request.user.id, is_paid=False)

    total_price = current_order.calculate_total_price()

    context = {
        'total_price': total_price,
        'order': current_order,
    }

    data = render_to_string('user_panel/includes/cart_content.html', context)

    return JsonResponse({
        'status': 'success',
        'body': data
    })
