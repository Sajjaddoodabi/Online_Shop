# Generated by Django 4.1 on 2022-09-08 13:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_module', '0011_alter_productcomment_is_delete'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productcomment',
            name='is_delete',
            field=models.BooleanField(default=False),
        ),
    ]
