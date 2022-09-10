from django.http import HttpRequest, HttpResponse, JsonResponse
from django.shortcuts import render

from order_module.models import Order, OrderDetail
from product_module.models import Product


def add_product_to_order(request: HttpRequest):
    product_id = request.GET.get('product_id')
    # count = int(request.GET.get('count'))
    #
    # if count < 1 or count > 10:
    #     return JsonResponse({
    #         'status': 'invalid_count',
    #         'text': 'This count is not invalid',
    #         'confirmButtonText': 'Ok',
    #         'icon': 'warning',
    #     })

    if request.user.is_authenticated:
        product = Product.objects.filter(id=product_id, is_delete=False, is_active=True)
        if product is not None:
            current_order, created = Order.objects.get_or_create(user_id=request.user.id, is_paid=False)
            current_order_detail = current_order.orderdetail_set.filter(product_id=product_id).first()

            if current_order_detail is not None:
                current_order_detail.count += 1
                current_order_detail.save()
                print(current_order_detail.count)
                return JsonResponse({
                    'status': 'success',
                    'text': 'This product successfully added to your cart',
                    'confirmButtonText': 'Ok,Good',
                    'icon': 'success',
                })
            else:
                new_order_detail = OrderDetail(product_id=product_id, order_id=current_order.id, count=1)
                new_order_detail.save()

                return JsonResponse({
                    'status': 'success',
                    'text': 'This product successfully added to your cart',
                    'confirmButtonText': 'Ok,Good',
                    'icon': 'success',
                })

        else:

            return JsonResponse({
                'status': 'not_found',
                'text': 'This product does not exist',
                'confirmButtonText': 'Oh, Ok',
                'icon': 'error',
            })
    else:

        return JsonResponse({
            'status': 'not_auth',
            'text': 'You should login first in order to add this product to your cart',
            'confirmButtonText': 'Login',
            'icon': 'error',
        })
