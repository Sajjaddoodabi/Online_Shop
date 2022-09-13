from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from django.views import View
from django.views.generic import DetailView, ListView

from order_module.models import OrderDetail
from product_module.forms import PriceFilterForm
from product_module.models import Product, ProductGallery, ProductCategory, ProductBrand, ProductComment


class ProductDetail(DetailView):
    template_name = 'product_module/product_details.html'
    model = Product

    def get_context_data(self, **kwargs):
        context = super(ProductDetail, self).get_context_data()
        loaded_product = self.object
        context['product_pictures'] = ProductGallery.objects.filter(product_id=loaded_product.id).all()
        context['similar_products'] = Product.objects.filter(brand_id=loaded_product.brand_id).all().exclude(
            id=loaded_product.id)[:10]
        context['comments'] = ProductComment.objects.filter(product_id=loaded_product.id, is_delete=False).order_by(
            '-date')
        context['comment_count'] = ProductComment.objects.filter(product_id=loaded_product.id, is_delete=False).count()
        context['detail_order'] = OrderDetail.objects.filter(product_id=loaded_product.id,
                                                             order__user_id=self.request.user.id).first()

        return context


class ProductList(ListView):
    template_name = 'product_module/product_list.html'
    context_object_name = 'products'
    model = Product
    paginate_by = 3

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super(ProductList, self).get_context_data()
        product: Product = Product.objects.filter(is_active=True, is_delete=False).order_by('-price').first()
        db_max_price = product.price if product is not None else 0
        context['brands'] = ProductBrand.objects.filter(is_active=True)
        context['categories'] = ProductCategory.objects.filter(
            is_active=True, is_delete=False, parent=None).prefetch_related(
            'productcategory_set')
        context['starting_price'] = self.request.GET.get('starting_price') or 0
        context['ending_price'] = self.request.GET.get('ending_price') or db_max_price
        context['db_max_price'] = db_max_price

        return context

    def get_queryset(self):
        query = super(ProductList, self).get_queryset()
        brand = self.kwargs.get('brand')
        category = self.kwargs.get('category')
        starting_price = self.request.GET.get('starting_price')
        ending_price = self.request.GET.get('ending_price')

        if starting_price is not None:
            query = query.filter(price__gt=starting_price)

        if ending_price is not None:
            query = query.filter(price__lte=ending_price)

        if brand is not None:
            query = query.filter(brand__url_title__iexact=brand)

        if category is not None:
            query = query.filter(category__url_title__iexact=category)

        return query


class FilterProduct(View):
    def get(self, request: HttpRequest):
        pass

    def post(self, request: HttpRequest):
        pass


def add_product_comment(request: HttpRequest):
    if request.user.is_authenticated:
        product_id = request.GET.get('product_id')
        product_comment = request.GET.get('product_comment')

        new_comment = ProductComment(user_id=request.user.id, product_id=product_id, text=product_comment)
        new_comment.save()

        context = {
            'comments': ProductComment.objects.filter(product_id=product_id, is_delete=False).order_by('-date'),
            'comment_count': ProductComment.objects.filter(product_id=product_id, is_delete=False).count()
        }
        return render(request, 'product_module/includes/product_comment_component.html', context)

    return HttpResponse('salam')
