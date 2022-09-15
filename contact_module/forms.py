from django import forms
from contact_module.models import ContactUsModel


class ContactUsForm(forms.ModelForm):
    class Meta:
        model = ContactUsModel
        fields = ['first_name', 'last_name', 'email', 'title', 'text']
        widgets = {
            'first_name': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'first name'
            }),
            'last_name': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'last name'
            }),
            'email': forms.EmailInput(attrs={
                'class': 'form-control',
                'placeholder': 'email'
            }),
            'title': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'title'
            }),
            'text': forms.Textarea(attrs={
                'class': 'form-control',
                'placeholder': 'message',
                'id': 'message'
            }),
        }
