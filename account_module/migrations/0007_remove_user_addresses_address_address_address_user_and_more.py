# Generated by Django 4.1 on 2022-09-14 15:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('account_module', '0006_user_date_of_birth_user_national_code'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='addresses',
        ),
        migrations.AddField(
            model_name='address',
            name='address',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='address',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='address',
            name='title',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]