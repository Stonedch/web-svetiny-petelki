from rest_framework import serializers

from questions.models import Question


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = [
            'id',
            'title',
            'body',
            'created',
            'updated',
        ]
        read_only_fields = [
            'id',
            'created',
            'updated',
        ]

