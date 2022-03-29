from rest_framework.permissions import IsAdminUser
from rest_framework.viewsets import ModelViewSet

from questions.models import Question
from questions.serializers import QuestionSerializer
from products.permissions import ReadOnly


class QuestionViewSet(ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()
    permission_classes = (IsAdminUser|ReadOnly, )

