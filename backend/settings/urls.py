from rest_framework import routers

from .viewsets import SettingsViewSet

router = routers.DefaultRouter()

router.register(r'settings', SettingsViewSet, basename='settings')

