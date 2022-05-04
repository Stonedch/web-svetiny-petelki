from django.db import models
from django.utils.translation import gettext as _

from .settings import Settings

class Link(models.Model):
    name = models.CharField(max_length=256, blank=False, null=False, verbose_name=_('name'))
    url = models.CharField(max_length=256, blank=False, null=False, verbose_name=_('url'))
    settings = models.ForeignKey(
        Settings,
        related_name='links',
        on_delete=models.CASCADE,
        blank=False, null=False,
        default=1,
        verbose_name=_('settings')
    )

    class Meta:
        verbose_name = _('link')
        verbose_name_plural = _('links')

    def __str__(self):
        return f'{self.name}: {self.url}'

