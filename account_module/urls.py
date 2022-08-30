from django.urls import path
from . import views

urlpatterns = [
    path('/email', views.RegisterEmailView.as_view(), name='register_email_page'),
    path('/mobile', views.RegisterMobileView.as_view(), name='register_mobile_page'),
]
