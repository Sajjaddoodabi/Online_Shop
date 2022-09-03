from django.http import HttpRequest
from django.shortcuts import render
from django.views.generic import TemplateView
from product_module.models import ProductCategory


class HomeView(TemplateView):
    template_name = 'home_module/main_page.html'

    def get_context_data(self, **kwargs):
        context = super(HomeView, self).get_context_data()
        context['categories'] = ProductCategory.objects.all()
        return context


def site_header_component(request: HttpRequest):
    return render(request, 'shared/header_component.html')


def site_footer_component(request: HttpRequest):
    return render(request, 'shared/footer_component.html')
