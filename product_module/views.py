from django.shortcuts import render
from django.views.generic import DetailView
from product_module.models import Product, ProductGallery, ProductCategory, ProductBrand


class ProductDetail(DetailView):
    template_name = 'product_module/product_details.html'
    model = Product

    def get_context_data(self, **kwargs):
        context = super(ProductDetail, self).get_context_data()
        loaded_product = self.object
        context['product_pictures'] = ProductGallery.objects.filter(product_id=loaded_product.id).all()
        context['similar_products'] = Product.objects.filter(brand_id=loaded_product.brand_id).all().exclude(
            id=loaded_product.id)[:10]
        context['categories'] = ProductCategory.objects.filter(
            is_active=True, is_delete=False, parent=None).prefetch_related(
            'productcategory_set')
        context['brands'] = ProductBrand.objects.filter(is_active=True)

        return context
