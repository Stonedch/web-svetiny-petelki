from django.db import models
from django.utils.translation import gettext as _
from django.core.validators import MinLengthValidator


class Color(models.Model):
    name = models.CharField(
        db_index=True,
        max_length=256,
        unique=True,
        verbose_name=_('name')
    )
    hex_code = models.CharField(
        max_length=6,
        validators=[MinLengthValidator(6)],
        verbose_name=_('hex_code')
    )
    created = models.DateTimeField(
        auto_now_add=True, verbose_name=_('created'))
    updated = models.DateTimeField(auto_now=True, verbose_name=_('updated'))

    class Meta:
        verbose_name = _('color')
        verbose_name_plural = _('colors')

    def __str__(self):
        return f"{self.name}"
