from django.db import models


class Question(models.Model):
    title = models.TextField(max_length=512)
    body = models.TextField(max_length=512)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title}"

