from django.shortcuts import render
from django.views.generic import DetailView
from product_module.models import Product


# Create your views here.

class ProductDetail(DetailView):
    template_name = ''
    model = Product
