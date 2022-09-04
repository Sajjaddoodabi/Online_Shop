from django.shortcuts import render
from django.views.generic import DetailView
from product_module.models import Product


class ProductDetail(DetailView):
    template_name = 'product_module/product_details.html'
    model = Product
