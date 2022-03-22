from django.db import models


class Product(models.Model):
    name = models.CharField(db_index=True, max_length=256, unique=True)
    picutre = models.ImageField(upload_to='products')
    price = models.DecimalField(max_digits=5, decimal_places=2, null=False)
    discount = models.DecimalField(max_digits=5, decimal_places=2)
    status = models.CharField(max_length=256, null=False)
    materials = models.TextField(max_length=512)
    color = models.CharField(max_length=256)
    sizes = models.TextField(max_length=512)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"

