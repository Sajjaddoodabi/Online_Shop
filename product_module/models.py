from django.db import models


class ProductBrand(models.Model):
    title = models.CharField(max_length=200)
    url_title = models.CharField(max_length=200)
    is_active = models.BooleanField()

    def __str__(self):
        return self.title


class ProductCategory(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images/categories', null=True, blank=True)
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
