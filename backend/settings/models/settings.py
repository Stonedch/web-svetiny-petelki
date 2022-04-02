from django.db import models

from .singleton import SingletonModel


class Settings(SingletonModel):
    url = models.URLField(max_length=256, null=True)
    phone = models.CharField(max_length=32, null=True)

    def __str__(self):
        return 'Settings'

