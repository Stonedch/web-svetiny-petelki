from rest_framework import status
from rest_framework.permissions import BasePermission, IsAdminUser, SAFE_METHODS
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken

from products.models import Category
from products.serializers import CategorySerializer


class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS


class CategoryViewSet(ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
    permission_classes = (IsAdminUser|ReadOnly, )

