from django.http import HttpRequest
from django.shortcuts import render, redirect
from django.views import View
from django.views.generic import CreateView
from contact_module.forms import ContactUsForm
from site_module.models import SiteSetting


class ContactUs(CreateView):
    form_class = ContactUsForm
    template_name = 'contact_module/contact_us.html'
    success_url = "/contact-us"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        setting: SiteSetting = SiteSetting.objects.filter(is_main_setting=True).first()
        context['site_setting'] = setting
        return context
