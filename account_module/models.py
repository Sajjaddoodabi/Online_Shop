from django.contrib.auth.models import AbstractUser
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class User(AbstractUser):
    avatar = models.ImageField(upload_to='images/profiles', null=True, blank=True)
    email_active_code = models.CharField(max_length=100)
    mobile = PhoneNumberField(null=True, blank=True, unique=True)
    mobile_active_code = models.CharField(max_length=10)
    date_of_birth = models.DateField(blank=True, null=True)
    national_code = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.username


class Address(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    phone = models.CharField(max_length=100, null=True, blank=True)
    post_code = models.IntegerField(null=True, blank=True)
    is_default = models.BooleanField()

    def __str__(self):
        return self.title


class AdminMessages(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    text = models.TextField()
    is_delete = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username
