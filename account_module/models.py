from django.contrib.auth.models import AbstractUser
from django.db import models


class Address(models.Model):
    title = models.CharField(max_length=500, null=True, blank=True)
    is_default = models.BooleanField()

    def __str__(self):
        return self.title


class User(AbstractUser):
    avatar = models.ImageField(upload_to='images/profiles', null=True, blank=True)
    email_active_code = models.CharField(max_length=100)
    addresses = models.ForeignKey(Address, on_delete=models.CASCADE)

    def __str__(self):
        if self.first_name is not '' and self.last_name is not '':
            return self.get_full_name()

        return self.email
