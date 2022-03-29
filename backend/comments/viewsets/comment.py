from rest_framework.permissions import IsAdminUser
from rest_framework.viewsets import ModelViewSet

from comments.models import Comment
from comments.serializers import CommentSerializer
from products.permissions import ReadOnly


class CommentViewSet(ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    permission_classes = (IsAdminUser|ReadOnly, )

