from django.urls import include, path
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register("", views.ProgressListViewSet, basename="progress_list")
urlpatterns = router.urls

urlpatterns = [
    path("", include(router.urls)),
]
