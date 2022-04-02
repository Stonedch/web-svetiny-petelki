# Generated by Django 4.0.3 on 2022-04-02 21:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Settings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.URLField(max_length=256, null=True)),
                ('phone', models.CharField(max_length=32, null=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Link',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(max_length=256)),
                ('url', models.URLField(max_length=256)),
                ('settings', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='links', to='settings.settings')),
            ],
        ),
    ]
