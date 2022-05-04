from django.db import models
from django.utils.translation import gettext as _

from users.models import User
from products.models import Product


class Comment(models.Model):
    author = models.ForeignKey(
        User,
        related_name='comments',
        related_query_name='comment',
        on_delete=models.CASCADE,
        blank=False, null=False,
        verbose_name=_('author')
    )
    product = models.ForeignKey(
        Product,
        related_name='products',
        related_query_name='product',
        on_delete=models.SET_NULL,
        blank=True, null=True,
        verbose_name=_('product')
    )
    rating = models.IntegerField(blank=True, null=True, verbose_name=_('rating'))
    body = models.TextField(max_length=512, verbose_name=_('body'))
    active = models.BooleanField(default=False, blank=False, null=False, verbose_name=_('active'))
    created = models.DateTimeField(auto_now_add=True, verbose_name=_('created'))
    updated = models.DateTimeField(auto_now=True, verbose_name=_('updated'))

    class Meta:
        verbose_name = _('comment')
        verbose_name_plural = _('comments')

    def __str__(self):
        return f"{self.author}, {self.created}"

