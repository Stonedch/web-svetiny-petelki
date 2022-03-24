from django.db import models

from .category import Category


class Product(models.Model):
    name = models.CharField(db_index=True, max_length=256, unique=True)
    picture = models.ImageField(upload_to='products')
    price = models.DecimalField(max_digits=5, decimal_places=2, null=False)
    discount = models.DecimalField(max_digits=5, decimal_places=2)
    status = models.CharField(max_length=256, null=False)
    materials = models.TextField(max_length=512)
    color = models.CharField(max_length=256)
    sizes = models.TextField(max_length=512)
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

