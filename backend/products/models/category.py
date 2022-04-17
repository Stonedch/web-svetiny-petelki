from django.db import models
from django.utils.translation import gettext as _


class Category(models.Model):
    name = models.CharField(db_index=True, max_length=255, unique=True, verbose_name=_('name'))
    picture = models.ImageField(upload_to='categories', verbose_name=_('picture'))
    created = models.DateTimeField(auto_now_add=True, verbose_name=_('created'))
    updated = models.DateTimeField(auto_now=True, verbose_name=_('updated'))
    
    class Meta:
        verbose_name = _('category')
        verbose_name_plural = _('categories')

    def __str__(self):
        return f"{self.name}"

