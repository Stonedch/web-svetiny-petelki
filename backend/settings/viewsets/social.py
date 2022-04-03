from rest_framework.permissions import IsAdminUser
from rest_framework.viewsets import ModelViewSet

from settings.models import Social
from settings.serializers import SocialSerializer
from products.permissions import ReadOnly


class SocialViewSet(ModelViewSet):
    serializer_class = SocialSerializer
    queryset = Social.objects.all()
    permission_classes = (IsAdminUser|ReadOnly, )

