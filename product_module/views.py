from django.shortcuts import render
from django.views.generic import DetailView, ListView

from product_module.forms import PriceFilterForm
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

        return context


class ProductList(ListView):
    template_name = 'product_module/product_list.html'
    model = Product
    paginate_by = 10

    def get_context_data(self, **kwargs):
        context = super(ProductList, self).get_context_data()
        loaded_category = self.kwargs.get('category')
        form = PriceFilterForm
        product: Product = Product.objects.filter(is_active=True, is_delete=False).order_by('-price').first()
        db_max_price = product.price if product is not None else 0
        context['products'] = Product.objects.filter(is_active=True, is_delete=False)
        context['categories'] = ProductCategory.objects.filter(
            is_active=True, is_delete=False, parent=None).prefetch_related(
            'productcategory_set')
        context['brands'] = ProductBrand.objects.filter(is_active=True)
        context['starting_price'] = self.request.GET.get('starting_price') or 0
        context['ending_price'] = self.request.GET.get('ending_price') or db_max_price
        context['loaded_category'] = loaded_category
        context['form'] = form

        return context

    def get_queryset(self):
        query = super(ProductList, self).get_queryset()
        brand = self.kwargs.get('brand')
        starting_price = self.request.GET.get('starting_price')
        ending_price = self.request.GET.get('ending_price')

        if starting_price is not None:
            query = query.filter(price__gt=starting_price)

        if ending_price is not None:
            query = query.filter(price__lte=ending_price)

        if brand is not None:
            query = query.filter(brand__url_title__iexact=brand)

        return query
