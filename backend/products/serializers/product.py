from rest_framework import serializers

from products.models import Product
from .color import ColorSerializer


class ProductSerializer(serializers.ModelSerializer):
    colors = ColorSerializer(many=True, read_only=True)

    class Meta:
        model = Product

        fields = [
            'id',
            'name',
            'picture',
            'price',
            'category',
            'discount',
            'status',
            'materials',
            'colors',
            'sizes',
            'created',
            'updated'
        ]
