from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework import routers
from rest_framework import permissions

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from users.urls import router as users_router
from authentication.urls import router as authentication_router
from products.urls import router as products_router
from questions.urls import router as questions_router
from comments.urls import router as comments_router
from settings.urls import router as settings_router

schema_view = get_schema_view(
   openapi.Info(
      title='Snippets API',
      default_version='v1',
      description='Test description',
      terms_of_service='https://www.google.com/policies/terms/',
      contact=openapi.Contact(email='contact@snippets.local'),
      license=openapi.License(name='BSD License'),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)

router = routers.DefaultRouter()

router.registry.extend(users_router.registry)
router.registry.extend(authentication_router.registry)
router.registry.extend(products_router.registry)
router.registry.extend(questions_router.registry)
router.registry.extend(comments_router.registry)
router.registry.extend(settings_router.registry)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include([
        path('v1/', include([
            path('', include(router.urls), name='router'),
        ]), name='v1')
    ]), name='api'),
    path('swagger(?P<format>\.json|\.yaml)', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

