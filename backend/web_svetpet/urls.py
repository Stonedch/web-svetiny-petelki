from django.urls import path, include

from rest_framework import routers

from users.urls import router as users_router
from authentication.urls import router as authentication_router

router = routers.DefaultRouter()

router.registry.extend(users_router.registry)
router.registry.extend(authentication_router.registry)

urlpatterns = [
    path('api/', include([
        path('v1/', include([
            path('', include(router.urls), name='router'),
        ]), name='v1')
    ]), name='api'),
]

