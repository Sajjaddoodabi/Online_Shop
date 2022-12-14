# Generated by Django 4.1 on 2022-09-03 17:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('site_module', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sliders',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('url', models.URLField()),
                ('url_title', models.CharField(max_length=200)),
                ('description', models.TextField(max_length=500)),
                ('image', models.ImageField(upload_to='images/sliders')),
                ('is_active', models.BooleanField()),
            ],
        ),
    ]
