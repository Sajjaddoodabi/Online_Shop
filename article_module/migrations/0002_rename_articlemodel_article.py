# Generated by Django 4.1 on 2022-09-16 09:22

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('article_module', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ArticleModel',
            new_name='Article',
        ),
    ]
