from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import member_signup_view, HelloWorldView


urlpatterns = [
    path("signup/", member_signup_view, name="signup"),
    path(
        "token/obtain/", jwt_views.TokenObtainPairView.as_view(), name="token_create"
    ),  # override sjwt stock token
    path("token/refresh/", jwt_views.TokenRefreshView.as_view(), name="token_refresh"),
    path("hello/", HelloWorldView.as_view(), name="hello_world"),
]
