from django.http import HttpRequest, HttpResponse
from django.shortcuts import render

from order_module.models import Order, OrderDetail
from product_module.models import Product


def add_product_to_order(request: HttpRequest):
    product_id = request.GET.get('product_id')

    if request.user.is_authenticated:
        product = Product.objects.filter(id=product_id, is_delete=False, is_active=True)
        if product is not None:
            current_order, created = Order.objects.get_or_create(user_id=request.user.id, is_paid=False)
            print(current_order.id)
            current_order_detail = current_order.orderdetail_set.filter(product_id=product_id).first()

            if current_order_detail is not None:
                print('product already added')
                return HttpResponse('product already added')
            else:
                new_order_detail = OrderDetail(product_id=product_id, order_id=current_order.id, count=1)
                new_order_detail.save()
                print(new_order_detail.order_id)
                print(new_order_detail.id)
                print('product added')
                return HttpResponse('product added')

        else:
            print('product not found')
            return HttpResponse('product not found')
    else:
        print('login first')
        return HttpResponse('login first')
