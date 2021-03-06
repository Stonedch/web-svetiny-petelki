# Generated by Django 4.0.3 on 2022-04-03 12:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('settings', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Social',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(max_length=256)),
                ('url', models.URLField(max_length=256)),
                ('picture', models.ImageField(upload_to='socials')),
                ('settings', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='Socials', to='settings.settings')),
            ],
        ),
    ]
