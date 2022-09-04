from django.db import models
from account_module.models import User


class ProductBrand(models.Model):
    title = models.CharField(max_length=200)
    url_title = models.CharField(max_length=200)
    is_active = models.BooleanField()

    def __str__(self):
        return self.title


class ProductCategory(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images/categories', null=True, blank=True)
    parent = models.ForeignKey('ProductCategory', on_delete=models.CASCADE, null=True, blank=True)
    url_title = models.CharField(max_length=200)
    is_active = models.BooleanField()
    is_delete = models.BooleanField()

    def __str__(self):
        return self.title


class Product(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images/products', null=True, blank=True)
    price = models.IntegerField()
    category = models.ManyToManyField(ProductCategory)
    brand = models.ForeignKey(ProductBrand, on_delete=models.CASCADE)
    short_description = models.TextField(max_length=500, null=True, blank=True)
    description = models.TextField(db_index=True)
    slug = models.SlugField(max_length=200, default='', null=False, blank=True, unique=True, db_index=True)
    is_active = models.BooleanField()
    is_delete = models.BooleanField()

    def __str__(self):
        return self.title


class ProductVisit(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    ip = models.CharField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.product.title} - {self.user.username}'
