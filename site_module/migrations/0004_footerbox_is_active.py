# Generated by Django 4.1 on 2022-09-03 17:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('site_module', '0003_footerbox_footerlink'),
    ]

    operations = [
        migrations.AddField(
            model_name='footerbox',
            name='is_active',
            field=models.BooleanField(default=True),
            preserve_default=False,
        ),
    ]