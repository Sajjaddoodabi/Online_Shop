from django.db import models


# Create your models here.


class SiteSetting(models.Model):
    site_name = models.CharField(max_length=200)
    site_url = models.URLField(max_length=200)
    address = models.CharField(max_length=200, null=True, blank=True)
    phone = models.CharField(max_length=200, null=True, blank=True)
    fax = models.CharField(max_length=200, null=True, blank=True)
    email = models.CharField(max_length=200, null=True, blank=True)
    copy_right = models.TextField(max_length=200)
    about_us = models.TextField(max_length=200)
    logo = models.ImageField(upload_to='images/site_logo', max_length=200)
    is_main_setting = models.BooleanField()

    def __str__(self):
        return self.site_name


class Sliders(models.Model):
    title = models.CharField(max_length=200)
    url = models.URLField(max_length=200)
    url_title = models.CharField(max_length=200)
    description = models.TextField(max_length=500)
    image = models.ImageField(upload_to='images/sliders')
    is_active = models.BooleanField()

    def __str__(self):
        return self.title


class FooterBox(models.Model):
    title = models.CharField(max_length=200)
    is_active = models.BooleanField()

    def __str__(self):
        return self.title


class FooterLink(models.Model):
    title = models.CharField(max_length=200)
    url = models.URLField(max_length=400)
    footer_box = models.ForeignKey(FooterBox, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
