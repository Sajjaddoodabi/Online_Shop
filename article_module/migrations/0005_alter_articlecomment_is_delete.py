# Generated by Django 4.1 on 2022-09-16 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article_module', '0004_articlecategory_parent_articlecomment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articlecomment',
            name='is_delete',
            field=models.BooleanField(default=False),
        ),
    ]
