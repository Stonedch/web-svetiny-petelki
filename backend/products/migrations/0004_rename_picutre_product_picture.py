# Generated by Django 4.0.3 on 2022-03-23 08:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_rename_picutre_category_picture'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='picutre',
            new_name='picture',
        ),
    ]
