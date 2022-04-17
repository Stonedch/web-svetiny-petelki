from django.db import models

from .category import Category


class Product(models.Model):
    name = models.CharField(db_index=True, max_length=256, unique=True)
    picture = models.ImageField(upload_to='products', blank=True, null=True)
    price = models.FloatField(default=0, blank=False, null=False)
    discount = models.FloatField(default=0, blank=False, null=False)
    status = models.CharField(max_length=256, blank=True, null=True)
    materials = models.TextField(max_length=512, blank=True, null=True)
    color = models.CharField(max_length=256, blank=True, null=True)
    sizes = models.TextField(max_length=512, blank=True, null=True)
    category = models.ForeignKey(
        Category,
        related_name='products',
        related_query_name='product',
        on_delete=models.SET_NULL,
        blank=True, null=True
    )
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"

