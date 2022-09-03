from django.http import HttpRequest
from django.shortcuts import render
from django.views.generic import TemplateView


class HomeView(TemplateView):
    template_name = 'home_module/main_page.html'


def site_header_component(request: HttpRequest):
    return render(request, 'shared/header_component.html')


def site_footer_component(request: HttpRequest):
    return render(request, 'shared/footer_component.html')
