from django.contrib import admin
from django.urls import path
from rest_framework import routers
from llm_app.views import CollectionsViewSet
from django.conf.urls.static import static
from django.conf import settings

router = routers.DefaultRouter()

router.register(r"collections/", CollectionsViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/collections/", CollectionsViewSet.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
