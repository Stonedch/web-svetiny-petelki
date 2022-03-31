from django.db import models

from .singleton import SingletonModel


class Settings(SingletonModel):
    url = models.URLField(max_length=256)
    phone = models.CharField(max_length=32)

    def __str__(self):
        return 'Settings'

