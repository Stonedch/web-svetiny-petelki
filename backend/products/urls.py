from rest_framework import routers

from .viewsets import CategoryViewSet

router = routers.DefaultRouter()

router.register(r'categories', CategoryViewSet, basename='categories')

