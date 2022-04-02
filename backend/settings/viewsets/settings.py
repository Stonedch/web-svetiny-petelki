from django.shortcuts import redirect

from rest_framework.permissions import IsAdminUser
from rest_framework import status
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework.decorators import action

from settings.models import Settings
from settings.serializers import SettingsSerializer
from products.permissions import ReadOnly


class SettingsViewSet(ViewSet):
    serializer_class = SettingsSerializer
    permission_classes = (IsAdminUser|ReadOnly, )

    def list(self, request):
        queryset = Settings.load()
        serializer = self.serializer_class(queryset, many=False)
        return Response(serializer.data)

    def create(self, request):
        queryset = Settings.load()
        serializer = self.serializer_class(data=request.data, partial=True)

        if serializer.is_valid():
            serializer.update(queryset, serializer.validated_data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

