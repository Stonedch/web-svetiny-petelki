from django.db import models

from .settings import Settings

class Social(models.Model):
    name = models.TextField(max_length=256, blank=False, null=False)
    url = models.URLField(max_length=256, blank=False, null=False)
    picture = models.FileField(upload_to='socials', blank=True, null=True)
    settings = models.ForeignKey(
        Settings,
        related_name='socials',
        on_delete=models.CASCADE,
        blank=False, null=False,
        default=1
    )

    def __str__(self):
        return f'{name}: {url}'

