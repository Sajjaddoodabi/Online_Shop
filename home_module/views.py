from django.db.models import Count
from django.http import HttpRequest
from django.shortcuts import render
from django.views.generic import TemplateView
from product_module.models import ProductCategory, ProductVisit, Product
from site_module.models import FooterBox, FooterLink, SiteSetting, Sliders


class HomeView(TemplateView):
    template_name = 'home_module/main_page.html'

    def get_context_data(self, **kwargs):
        context = super(HomeView, self).get_context_data()
        context['categories'] = ProductCategory.objects.filter(is_active=True, is_delete=False, parent=None)
        context['sliders'] = Sliders.objects.filter(is_active=True)
        context['most_views'] = Product.objects.filter(
            is_active=True, is_delete=False).annotate(
            visit_count=Count('productvisit')).order_by('-visit_count')[:8]
        context['newest_products'] = Product.objects.filter(is_delete=False, is_active=True).order_by('-id')
        return context


def site_header_component(request: HttpRequest):
    categories = ProductCategory.objects.filter(
        is_active=True, is_delete=False, parent=None).prefetch_related(
        'productcategory_set')

    site_setting = SiteSetting.objects.filter(is_main_setting=True).first()

    context = {
        'categories': categories,
        'site_setting': site_setting
    }

    return render(request, 'shared/header_component.html', context)


def site_footer_component(request: HttpRequest):
    footer_link_boxes = FooterBox.objects.filter(is_active=True).prefetch_related('footerlink_set')
    site_setting = SiteSetting.objects.filter(is_main_setting=True).first()

    context = {
        'footer_link_boxes': footer_link_boxes,
        'site_setting': site_setting
    }

    return render(request, 'shared/footer_component.html', context)
