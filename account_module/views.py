from random import randint

from django.http import HttpRequest
from django.shortcuts import render, redirect
from django.urls import reverse
from django.utils.crypto import get_random_string
from django.views import View

from account_module.forms import RegisterWithMobile, RegisterWithEmail
from account_module.models import User


class RegisterView(View):
    def get(self, request: HttpRequest):
        mobile_form = RegisterWithMobile
        email_form = RegisterWithEmail

        context = {
            'mobile_form': mobile_form,
            'email_form': email_form
        }

        return render(request, '', context)

    def post(self, request: HttpRequest):
        mobile_form = RegisterWithMobile(request.POST)
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

                # todo sending active email

                return redirect(reverse(''))

        if mobile_form.is_valid():
            mobile = mobile_form.cleaned_data.get('mobile')
            password_mobile = mobile_form.cleaned_data.get('password')
            user_name = mobile_form.cleaned_data.get('user_name')
            user = User.objects.filter(mobile__exact=mobile).exists()

            if user:
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

                return redirect(reverse(''))

        context = {
            'mobile_form': mobile_form,
            'email_form': email_form,
        }

        return render(request, '', context)
