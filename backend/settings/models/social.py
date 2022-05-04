from django.db import models
from django.utils.translation import gettext as _

from .settings import Settings

class Social(models.Model):
    name = models.TextField(max_length=256, blank=False, null=False, verbose_name=_('name'))
    url = models.URLField(max_length=256, blank=False, null=False, verbose_name=_('url'))
    picture = models.FileField(upload_to='socials', blank=True, null=True, verbose_name=_('picture'))
    settings = models.ForeignKey(
        Settings,
        related_name='socials',
        on_delete=models.CASCADE,
        blank=False, null=False,
        default=1,
        verbose_name=_('settings')
    )

    class Meta:
        verbose_name=_('social')
        verbose_name_plural=_('socials')

    def __str__(self):
        return f'{name}: {url}'

