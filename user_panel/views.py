from django.http import HttpRequest, JsonResponse
from django.shortcuts import render
from django.template.loader import render_to_string

from order_module.models import Order, OrderDetail


def user_basket(request: HttpRequest):
    current_order, created = Order.objects.prefetch_related('orderdetail_set').get_or_create(
        user_id=request.user.id, is_paid=False)

    total_amount = current_order.calculate_total_price()
    context = {
        'order': current_order,
        'total_price': total_amount,
    }

    return render(request, 'user_panel/cart.html', context)


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
