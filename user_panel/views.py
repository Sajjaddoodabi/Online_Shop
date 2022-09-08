from django.http import HttpRequest
from django.shortcuts import render

from order_module.models import Order


def user_basket(request: HttpRequest):
    current_order, created = Order.objects.prefetch_related('orderdetail_set').get_or_create(
        user_id=request.user.id, is_paid=False)

    total_amount = current_order.calculate_total_price()
    context = {
        'order': current_order,
        'total_amount': total_amount,
    }

    return render(request, 'user_panel/cart.html', context)
