from rest_framework import serializers

from settings.models import Settings


class SettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Settings
        fields = [
            'url',
            'phone',
        ]

