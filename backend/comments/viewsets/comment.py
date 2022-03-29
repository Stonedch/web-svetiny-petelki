from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet

from comments.models import Comment
from comments.serializers import ForAdminSerializer, ForUserSerializer
from products.permissions import ReadOnly


class CommentViewSet(ModelViewSet):
    # serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    permission_classes = (IsAuthenticated|ReadOnly, )

    def get_serializer_class(self):
        if self.request.user.is_staff:
            return ForAdminSerializer
        return ForUserSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

