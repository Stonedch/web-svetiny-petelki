# Generated by Django 4.0.3 on 2022-04-11 13:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('settings', '0002_social'),
    ]

    operations = [
        migrations.AlterField(
            model_name='link',
            name='name',
            field=models.CharField(max_length=256),
        ),
        migrations.AlterField(
            model_name='link',
            name='url',
            field=models.CharField(max_length=256),
        ),
        migrations.AlterField(
            model_name='social',
            name='picture',
            field=models.FileField(blank=True, null=True, upload_to='socials'),
        ),
        migrations.AlterField(
            model_name='social',
            name='settings',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='socials', to='settings.settings'),
        ),
    ]
