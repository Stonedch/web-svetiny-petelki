from rest_framework.permissions import IsAdminUser
from rest_framework.viewsets import ModelViewSet

import django_filters

from products.models import Product
from products.serializers import ProductSerializer
from products.permissions import ReadOnly


class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    permission_classes = (IsAdminUser|ReadOnly, )
    filterset_fields = ('category', )

