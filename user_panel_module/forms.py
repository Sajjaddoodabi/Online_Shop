from django import forms
from django.core import validators
from django.core.exceptions import ValidationError
from account_module.models import User, Address


class EditInformationForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'avatar', 'email', 'mobile', 'national_code', 'date_of_birth']
        widgets = {
            'username': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'username'
            }),
            'first_name': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'firstname'
            }),
            'last_name': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'lastname'
            }),
            'avatar': forms.FileInput(attrs={
                'class': 'form-control',
            }),
            'email': forms.EmailInput(attrs={
                'class': 'form-control',
                'placeholder': 'email',
            }),
            'mobile': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'mobile'
            }),
            'national_code': forms.NumberInput(attrs={
                'class': 'form-control',
                'placeholder': 'national code'
            }),
            'date_of_birth': forms.DateInput(attrs={
                'class': 'form-control',
                'placeholder': 'date of birth'
            })
        }

        labels = {
            'first_name': 'firstname',
            'last_name': 'lastname',
            'avatar': 'avatar',
            'email': 'email',
            'mobile': 'mobile',
            'national_code': 'national_code',
            'date_of_birth': 'date_of_birth',
        }


class AddAddressForm(forms.ModelForm):
    class Meta:
        model = Address
        fields = ['title', 'address', 'post_code', 'phone']
        widgets = {
            'title': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'title'
            }),
            'address': forms.Textarea(attrs={
                'class': 'form-control',
                'placeholder': 'address'
            }),
            'post_code': forms.NumberInput(attrs={
                'class': 'form-control',
                'placeholder': 'post code'
            }),
            'phone': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'phone'
            }),
        }


class EditAddressForm(forms.ModelForm):
    class Meta:
        model = Address
        fields = ['title', 'address', 'post_code', 'phone']
        widgets = {
            'title': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'title'
            }),
            'address': forms.Textarea(attrs={
                'class': 'form-control',
                'placeholder': 'address'
            }),
            'post_code': forms.NumberInput(attrs={
                'class': 'form-control',
                'placeholder': 'post code'
            }),
            'phone': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'phone'
            }),
        }


class EditPassForm(forms.Form):
    current_password = forms.CharField(
        widget=forms.PasswordInput(attrs={
            'class': 'form-control',
            'placeholder': 'password'
        }),
        validators=[
            validators.MaxLengthValidator(100),
        ]
    )

    new_password = forms.CharField(
        widget=forms.PasswordInput(attrs={
            'class': 'form-control',
            'placeholder': 'new password'
        }),
        validators=[
            validators.MaxLengthValidator(100),
        ]
    )

    confirm_password = forms.CharField(
        widget=forms.PasswordInput(attrs={
            'class': 'form-control',
            'placeholder': 'confirm password'
        }),
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
