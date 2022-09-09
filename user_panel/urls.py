from django.urls import path
from . import views

urlpatterns = [
    path('user-basket', views.user_basket, name='user_basket_page'),
    path('change-order-detail', views.change_order_detail, name='change_detail_order_page'),
]
