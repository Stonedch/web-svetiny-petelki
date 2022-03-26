from rest_framework import serializers

from products.models import Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'products', 'name', 'picture', 'created', 'updated']

