from rest_framework import serializers

from settings.models import Settings
from .link import LinkSerializer


class SettingsSerializer(serializers.ModelSerializer):
    links = LinkSerializer(many=True, read_only=True)

    class Meta:
        model = Settings
        fields = [
            'url',
            'phone',
            'links',
        ]

