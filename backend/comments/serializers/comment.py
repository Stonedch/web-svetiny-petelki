from rest_framework import serializers

from comments.models import Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = [
            'id',
            'author',
            'product',
            'rating',
            'body',
            'created',
            'updated',
        ]
        read_only_fields = [
            'author',
            'created',
            'updated',
        ]

