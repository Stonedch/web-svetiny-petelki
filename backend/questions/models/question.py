from django.db import models
from django.utils.translation import gettext as _


class Question(models.Model):
    title = models.TextField(max_length=512, verbose_name=_('title'))
    body = models.TextField(max_length=512, verbose_name=_('body'))
    created = models.DateTimeField(auto_now_add=True, verbose_name=_('created'))
    updated = models.DateTimeField(auto_now=True, verbose_name=_('updated'))

    class Meta:
        verbose_name = _('question')
        verbose_name_plural = _('questions')

    def __str__(self):
        return f"{self.title}"
