from rest_framework.permissions import IsAdminUser
from rest_framework.viewsets import ModelViewSet

from settings.models import Link
from settings.serializers import LinkSerializer
from products.permissions import ReadOnly


class LinkViewSet(ModelViewSet):
    serializer_class = LinkSerializer
    queryset = Link.objects.all()
    permission_classes = (IsAdminUser|ReadOnly, )

