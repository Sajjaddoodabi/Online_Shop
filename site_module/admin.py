from django.contrib import admin
from . import models

admin.site.register(models.SiteSetting)
admin.site.register(models.FooterBox)
admin.site.register(models.FooterLink)
admin.site.register(models.Sliders)

