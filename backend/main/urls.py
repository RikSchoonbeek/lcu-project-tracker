from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path("admin/", admin.site.urls),
    # path("auth/", include("authentication.urls")),
    path("member/", include("member.urls")),
    path("project/", include("project.urls")),
    path("djoser_auth/", include("djoser.urls")),
    path("djoser_auth/", include("djoser.urls.jwt")),
]
