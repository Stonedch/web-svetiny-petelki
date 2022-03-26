from rest_framework import routers

from .viewsets import CategoryViewSet, ProductViewSet

router = routers.DefaultRouter()

router.register(r'categories', CategoryViewSet, basename='categories')
router.register(r'products', ProductViewSet, basename='products')

