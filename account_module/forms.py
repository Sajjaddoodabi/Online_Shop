from django import forms
from django.core import validators
from django.core.exceptions import ValidationError
from phonenumber_field import validators as phone_validators
from phonenumber_field.formfields import PhoneNumberField


class RegisterWithEmail(forms.Form):
    email = forms.EmailField(
        widget=forms.EmailInput(),
        validators=[
            validators.MaxLengthValidator(100),
            validators.EmailValidator
        ]
    )

    password = forms.CharField(
        widget=forms.PasswordInput(),
        validators=[
            validators.MaxLengthValidator(100),
        ]
    )

    confirm_password = forms.CharField(
        widget=forms.PasswordInput(),
        validators=[
            validators.MaxLengthValidator(100),
        ]
    )

    def password_confirm(self):
        password = self.cleaned_data.get('password')
        confirm_password = self.cleaned_data.get('confirm_password')

        if password == confirm_password:
            return confirm_password

        else:
            raise ValidationError('password does not match')


class RegisterWithMobile(forms.Form):
    user_name = forms.CharField(
        widget=forms.TextInput(),
        validators=[
            validators.MaxLengthValidator(100)
        ]
    )

    mobile = PhoneNumberField(
        # validators=[
        #     phone_validators.PhoneNumber
        # ]
    )

    password = forms.CharField(
        widget=forms.PasswordInput(),
        validators=[
            validators.MaxLengthValidator(100),
        ]
    )

    confirm_password = forms.CharField(
        widget=forms.PasswordInput(),
        validators=[
            validators.MaxLengthValidator(100),
        ]
    )

    def password_confirm(self):
        password = self.cleaned_data.get('password')
        confirm_password = self.cleaned_data.get('confirm_password')

        if password == confirm_password:
            return confirm_password

        else:
            raise ValidationError('password does not match')


class LoginForm(forms.Form):
    username = forms.CharField(
        widget=forms.TextInput(),
        validators=[
            validators.MaxLengthValidator(100),
        ]
    )

    password = forms.CharField(
        widget=forms.PasswordInput(),
        validators=[
            validators.MaxLengthValidator(100),
        ]
    )


class ForgotPassForm(forms.Form):
    email = forms.EmailField(
        widget=forms.EmailInput(),
        validators=[
            validators.MaxLengthValidator(100),
            validators.EmailValidator
        ]
    )


class ResetPassForm(forms.Form):
    password = forms.CharField(
        widget=forms.PasswordInput(),
        validators=[
            validators.MaxLengthValidator(100),
        ]
    )

    new_password = forms.CharField(
        widget=forms.PasswordInput(),
        validators=[
            validators.MaxLengthValidator(100),
        ]
    )

    confirm_password = forms.CharField(
        widget=forms.PasswordInput(),
        validators=[
            validators.MaxLengthValidator(100),
        ]
    )

    def password_confirm(self):
        password = self.cleaned_data.get('new_password')
        confirm_password = self.cleaned_data.get('confirm_password')

        if password == confirm_password:
            return confirm_password

        else:
            raise ValidationError('password does not match')
