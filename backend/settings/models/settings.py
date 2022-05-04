from django.db import models
from django.utils.translation import gettext as _

from .singleton import SingletonModel


class Settings(SingletonModel):
    url = models.URLField(max_length=256, null=True, verbose_name=_('url'))
    phone = models.CharField(max_length=32, null=True, verbose_name=_('phone'))
    
    class Meta:
        verbose_name = _('settings')
        verbose_name_plural = _('settings')

    def __str__(self):
        return 'Settings'
