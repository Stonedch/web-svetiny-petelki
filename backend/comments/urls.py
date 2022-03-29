from rest_framework import routers

from .viewsets import CommentViewSet

router = routers.DefaultRouter()

router.register(r'comments', CommentViewSet, basename='comments')

