from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", include("authentication.urls")),
    path("member/", include("member.urls")),
    path("project/", include("project.urls")),
    # path(
    #     "auth/token/", jwt_views.TokenObtainPairView.as_view(), name="token_obtain_pair"
    # ),
    # path(
    #     "auth/token/refresh/", jwt_views.TokenRefreshView.as_view(), name="token_refresh"
    # ),
]
