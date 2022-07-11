from django.db import models
from django.utils.translation import gettext as _

from .category import Category
from .color import Color


class Product(models.Model):
    name = models.CharField(
        db_index=True,
        max_length=256,
        unique=True,
        verbose_name=_('name')
    )
    picture = models.ImageField(
        upload_to='products',
        blank=True,
        null=True,
        verbose_name=_('picture')
    )
    price = models.FloatField(
        default=0,
        blank=False,
        null=False,
        verbose_name=_('price')
    )
    discount = models.FloatField(
        default=0,
        blank=False,
        null=False,
        verbose_name=_('discount')
    )
    status = models.CharField(
        max_length=256,
        blank=True,
        null=True,
        verbose_name=_('status')
    )
    materials = models.TextField(
        max_length=512,
        blank=True,
        null=True,
        verbose_name=_('materials')
    )
    colors = models.ManyToManyField(
        Color,
        blank=True,
        null=True,
        verbose_name=_('colors')
    )
    sizes = models.TextField(
        max_length=512,
        blank=True,
        null=True,
        verbose_name=_('sizes')
    )
    category = models.ForeignKey(
        Category,
        related_name='products',
        related_query_name='product',
        on_delete=models.SET_NULL,
        blank=True, null=True,
        verbose_name=_('category')
    )
    created = models.DateTimeField(
        auto_now_add=True,
        verbose_name=_('created')
    )
    updated = models.DateTimeField(
        auto_now=True,
        verbose_name=_('updated')
    )

    class Meta:
        verbose_name = _('product')
        verbose_name_plural = _('products')

    def __str__(self):
        return f"{self.name}"
