from django.db import models


# Create your models here.

class ContactUsModel(models.Model):
    title = models.CharField(max_length=200)
    email = models.EmailField()
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    text = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    response = models.TextField(blank=True, null=True)
    is_read_by_admin = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.first_name} {self.last_name} - {self.title}'
