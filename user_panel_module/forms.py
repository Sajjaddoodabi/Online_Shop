from django import forms
from django.core import validators

from account_module.models import User


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


