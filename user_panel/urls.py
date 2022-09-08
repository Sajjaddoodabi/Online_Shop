from django.urls import path
from . import views

urlpatterns = [
    path('user-basket', views.user_basket, name='user_basket_page'),
]
