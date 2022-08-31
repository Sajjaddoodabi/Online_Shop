import re
from random import randint

from django.contrib.auth import login
from django.http import HttpRequest, HttpResponse, Http404
from django.shortcuts import render, redirect
from django.urls import reverse
from django.utils.crypto import get_random_string
from django.views import View

from account_module.forms import RegisterWithMobile, RegisterWithEmail, LoginForm, ResetPassForm, ForgotPassForm
from account_module.models import User
from utils.email_service import send_email


class RegisterEmailView(View):
    def get(self, request: HttpRequest):
        email_form = RegisterWithEmail()

        context = {
            'email_form': email_form
        }

        return render(request, 'account_module/email_registration.html', context)

    def post(self, request: HttpRequest):
        email_form = RegisterWithEmail(request.POST)

        if email_form.is_valid():
            email = email_form.cleaned_data.get('email')
            password_email = email_form.cleaned_data.get('password')
            user = User.objects.filter(email__iexact=email).exists()
            if user:
                email_form.add_error('email', 'email already exists')
            else:
                new_user = User(
                    email=email,
                    email_active_code=get_random_string(72),
                    is_active=False,
                    username=email
                )
                new_user.set_password(password_email)
                new_user.save()

                send_email(
                    'account activation email',
                    new_user.email,
                    {'user': new_user},
                    'emails/activate_account.html'
                )

                return HttpResponse("done")

        context = {
            'email_form': email_form,
        }

        return render(request, 'account_module/email_registration.html', context)


class RegisterMobileView(View):
    def get(self, request: HttpRequest):
        mobile_form = RegisterWithMobile

        context = {
            'mobile_form': mobile_form
        }

        return render(request, 'account_module/phone_registration.html', context)

    def post(self, request: HttpRequest):
        mobile_form = RegisterWithMobile(request.POST)

        if mobile_form.is_valid():
            mobile = mobile_form.cleaned_data.get('mobile')
            password_mobile = mobile_form.cleaned_data.get('password')
            user_name = mobile_form.cleaned_data.get('user_name')
            user_mobile = User.objects.filter(mobile__exact=mobile).exists()
            user_username = User.objects.filter(username__iexact=user_name).exists()

            if user_username:
                mobile_form.add_error('username', 'username already exists')
            else:
                if user_mobile:
                    mobile_form.add_error('mobile', 'mobile already exists')
                else:
                    new_user = User(
                        mobile=mobile,
                        mobile_active_code=randint(100000, 999999),
                        is_active=False,
                        username=user_name
                    )
                    new_user.set_password(password_mobile)
                    new_user.save()

                    # todo send sms active code

                    return HttpResponse("done")

        context = {
            'mobile_form': mobile_form,
        }

        return render(request, 'account_module/phone_registration.html', context)


class LoginView(View):
    def get(self, request: HttpRequest):
        form = LoginForm

        context = {
            'form': form
        }
        return render(request, 'account_module/login_page.html', context)

    def post(self, request: HttpRequest):
        form = LoginForm(request.POST)

        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user: User = User.objects.filter(username__iexact=username).first()

            if user is not None:
                if not user.is_active:
                    form.add_error('username', 'this account is not active')
                    print('account not active')
                else:
                    is_correct_password = user.check_password(password)
                    if is_correct_password:
                        login(request, user)
                        return HttpResponse('logined')
                    else:
                        form.add_error('username', 'user with this details does not exists')
                        print('pass not corr')
            else:
                form.add_error('username', 'user with this details does not exists')
                print('username not found')

        context = {
            'form': form
        }

        return render(request, 'account_module/login_page.html', context)


class ForgotPassView(View):
    def get(self, request: HttpRequest):
        forget_pass_form = ForgotPassForm
        context = {
            'forget_pass_form': forget_pass_form
        }
        return render(request, 'account_module/forgot_pass_page.html', context)

    def post(self, request: HttpRequest):
        forget_pass_form = ForgotPassForm(request.POST)
        if forget_pass_form.is_valid():
            email = forget_pass_form.cleaned_data.get('email')
            user = User.objects.filter(email__iexact=email).first()

            if user is not None:
                send_email(
                    'pass word reset',
                    user.email,
                    {'user': user},
                    'emails/forgot_pass.html'
                )
                return HttpResponse('reseted')

        context = {
            'forget_pass_form': forget_pass_form
        }
        return render(request, 'account_module/forgot_pass_page.html', context)


class UserActivation(View):
    def get(self, request: HttpRequest, active_code):
        user = User.objects.filter(email_active_code__iexact=active_code).first()
        if user is not None:
            if not user.is_active:
                user.is_active = True
                user.email_active_code = get_random_string(72)
                user.save()
                return HttpResponse('account activated')
            else:
                return HttpResponse('account is already activated')

        raise Http404


class ResetPassView(View):
    def get(self, request: HttpRequest, active_code):
        user = User.objects.filter(email_active_code__iexact=active_code).first()
        if user is None:
            return HttpResponse('register first')
        else:
            reset_form = ResetPassForm
            context = {
                'reset_form': reset_form,
                'user': user
            }
            return render(request, 'reset_pass.html', context)

    def post(self, request: HttpRequest, active_code):
        reset_form = ResetPassForm(request.POST)
        if reset_form.is_valid():
            user = User.objects.filter(email_active_code__iexact=active_code).first()
            if user is None:
                return HttpResponse('user not found, login')

            new_password = reset_form.cleaned_data.get('new_password')
            user.set_password(new_password)
            user.email_active_code = get_random_string(72)
            user.is_active = True
            user.save()

            return HttpResponse('user activated, login')
