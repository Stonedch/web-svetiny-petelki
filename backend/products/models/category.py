from django.db import models


class Category(models.Model):
    name = models.CharField(db_index=True, max_length=255, unique=True)
    picutre = models.ImageField(upload_to='categories')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.email}"

