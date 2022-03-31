from rest_framework.permissions import IsAdminUser
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response

from settings.models import Settings
from settings.serializers import SettingsSerializer
from products.permissions import ReadOnly


class SettingsViewSet(ViewSet):
    serializer_class = SettingsSerializer
    queryset = Settings.load()
    permission_classes = (IsAdminUser|ReadOnly, )
    from rest_framework.permissions import AllowAny; permission_classes = (AllowAny, ) # DEBUG

    def list(self, request):
        serializer = self.serializer_class(self.queryset, many=False)
        return Response(serializer.data)

