from django.urls import path
from . import views

urlpatterns = [
    path('register/email', views.RegisterEmailView.as_view(), name='register_email_page'),
    path('register/mobile', views.RegisterMobileView.as_view(), name='register_mobile_page'),
    path('login', views.LoginView.as_view(), name='login_page'),
]
