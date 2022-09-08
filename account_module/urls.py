from django.urls import path
from . import views

urlpatterns = [
    path('register/email', views.RegisterEmailView.as_view(), name='register_email_page'),
    path('register/mobile', views.RegisterMobileView.as_view(), name='register_mobile_page'),
    path('login', views.LoginView.as_view(), name='login_page'),
    path('logout', views.LogoutView.as_view(), name='logout_page'),
    path('reset-pass/<active_code>', views.ResetPassView.as_view(), name='reset_pass_page'),
    path('active-account/<active_code>', views.UserActivation.as_view(), name='active_account_page'),
    path('forgot-pass/', views.ForgotPassView.as_view(), name='forgot_pass_page'),
]
