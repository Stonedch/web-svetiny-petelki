# Generated by Django 4.0.3 on 2022-03-23 08:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_product'),
    ]

    operations = [
        migrations.RenameField(
            model_name='category',
            old_name='picutre',
            new_name='picture',
        ),
    ]
