from django.urls import path
from . import views

urlpatterns = [
    path('<slug:slug>', views.ProductDetail.as_view(), name='product_detail'),
]
