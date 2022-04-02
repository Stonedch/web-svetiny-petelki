from django.db import models

from .settings import Settings

class Link(models.Model):
    name = models.TextField(max_length=256, blank=False, null=False)
    url = models.URLField(max_length=256, blank=False, null=False)
    settings = models.ForeignKey(
        Settings,
        related_name='links',
        on_delete=models.CASCADE,
        blank=False, null=False,
        default=Settings.load().id
    )

    def __str__(self):
        return f'{name}: {url}'
