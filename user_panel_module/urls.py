from django.urls import path
from . import views

urlpatterns = [
    path('', views.Dashboard.as_view(), name='dashboard'),
    path('addresses', views.Addresses.as_view(), name='addresses'),
    path('messages', views.Messages.as_view(), name='messages'),
    path('opinions', views.Opinions.as_view(), name='opinions'),
    path('orders', views.UserOrders.as_view(), name='orders'),
    path('recent-visits', views.RecentViews.as_view(), name='recent_visits'),
    path('edit-info', views.EditUserInfo.as_view(), name='edit_user'),
    path('user-basket', views.user_basket, name='user_basket_page'),
    path('change-order-detail', views.change_order_detail, name='change_detail_order_page'),
    path('remove-order-detail', views.remove_product_from_cart, name='remove_detail_order_page'),
    path('remove-address/', views.remove_address_from_account, name='remove_address'),
    path('add-address/', views.AddAddress.as_view(), name='add_address'),
    path('edit-address/<int:id>', views.EditAddress.as_view(), name='edit_address'),
    path('remove-comment/', views.remove_comment_from_account, name='remove_comment'),
]
