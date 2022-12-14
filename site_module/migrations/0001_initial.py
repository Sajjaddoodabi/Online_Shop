# Generated by Django 4.1 on 2022-09-03 13:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SiteSetting',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('site_name', models.CharField(max_length=200)),
                ('site_url', models.URLField()),
                ('address', models.CharField(blank=True, max_length=200, null=True)),
                ('phone', models.CharField(blank=True, max_length=200, null=True)),
                ('fax', models.CharField(blank=True, max_length=200, null=True)),
                ('email', models.CharField(blank=True, max_length=200, null=True)),
                ('copy_right', models.TextField(max_length=200)),
                ('about_us', models.TextField(max_length=200)),
                ('logo', models.ImageField(max_length=200, upload_to='images/site_logo')),
                ('is_main_setting', models.BooleanField()),
            ],
        ),
    ]
