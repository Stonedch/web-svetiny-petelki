from django.db import models

from users.models import User
from products.models import Product


class Comment(models.Model):
    author = models.ForeignKey(
        User,
        related_name='comments',
        related_query_name='comment',
        on_delete=models.CASCADE,
        blank=False, null=False
    )
    product = models.ForeignKey(
        Product,
        related_name='products',
        related_query_name='product',
        on_delete=models.SET_NULL,
        blank=True, null=True
    )
    rating = models.IntegerField(blank=True, null=True)
    body = models.TextField(max_length=512)
    active = models.BooleanField(default=False, blank=False, null=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.author}, {self.created}"

