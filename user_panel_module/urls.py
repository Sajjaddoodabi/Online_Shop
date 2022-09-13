from django.urls import path
from . import views

urlpatterns = [
    path('edit-info', views.EditUserInfo.as_view(), name='edit_user'),
    path('user-basket', views.user_basket, name='user_basket_page'),
    path('change-order-detail', views.change_order_detail, name='change_detail_order_page'),
    path('remove-order-detail', views.remove_product_from_cart, name='remove_detail_order_page'),
]
