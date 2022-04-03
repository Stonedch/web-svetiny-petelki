from rest_framework import serializers

from settings.models import Social


class SocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Social
        fields = [
            'name',
            'url',
            'picture',
        ]

