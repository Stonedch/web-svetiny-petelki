from rest_framework import routers

from .viewsets import QuestionViewSet

router = routers.DefaultRouter()

router.register(r'questions', QuestionViewSet, basename='questions')

