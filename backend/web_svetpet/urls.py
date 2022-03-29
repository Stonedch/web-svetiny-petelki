from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework import routers

from users.urls import router as users_router
from authentication.urls import router as authentication_router
from products.urls import router as products_router
from questions.urls import router as questions_router

router = routers.DefaultRouter()

router.registry.extend(users_router.registry)
router.registry.extend(authentication_router.registry)
router.registry.extend(products_router.registry)
router.registry.extend(questions_router.registry)

urlpatterns = [
    path('api/', include([
        path('v1/', include([
            path('', include(router.urls), name='router'),
        ]), name='v1')
    ]), name='api'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

