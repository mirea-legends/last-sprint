from django.contrib import admin
from django.urls import path
from rest_framework import routers
from llm_app.views import CollectionsViewSet
from django.conf.urls.static import static
from django.conf import settings
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

router = routers.DefaultRouter()

router.register(r"collections/", CollectionsViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/collections/", CollectionsViewSet.as_view()),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/token/verify/", TokenVerifyView.as_view(), name="token_verify"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
