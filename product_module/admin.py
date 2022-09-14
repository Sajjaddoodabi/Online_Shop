from django.contrib import admin
from . import models

admin.site.register(models.Product)
admin.site.register(models.ProductCategory)
admin.site.register(models.ProductBrand)
admin.site.register(models.ProductGallery)
admin.site.register(models.ProductComment)
admin.site.register(models.ProductVisit)
