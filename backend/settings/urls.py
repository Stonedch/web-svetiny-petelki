from rest_framework import routers

from .viewsets import SettingsViewSet, LinkViewSet

router = routers.DefaultRouter()

router.register(r'settings', SettingsViewSet, basename='settings')
router.register(r'settings/navbar', LinkViewSet, basename='navbar')

