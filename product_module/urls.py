from django.urls import path
from . import views

urlpatterns = [
    path('s/<category>', views.ProductList.as_view(), name='product_list'),
    path('/<slug:slug>', views.ProductDetail.as_view(), name='product_detail'),
    path('/add-product-comment/', views.add_product_comment, name='add_product_comment'),
]
