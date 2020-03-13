from rest_framework import status, permissions
from rest_framework.decorators import (
    api_view,
    permission_classes,
)
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet
import requests

from .serializers import CustomUserCreateSerializer
from member.serializers import MemberDetailSerializer
from .services import MemberSignupService


@api_view(["GET"])
@permission_classes([permissions.AllowAny])
def request_user_activation(request, uid, token):
    """ 
    Intermediate view to activate a user's email. 
    """
    # TODO (riks) properly handle response error / success
    # probably do some redirect to a user activation success
    # page?
    # protocol = "https://" if request.is_secure() else "http://"
    # web_url = protocol + request.get_host()
    # post_url = web_url + "/djoser_auth/users/activation/"
    post_url = "http://127.0.0.1:8000/djoser_auth/users/activation/"
    post_data = {"uid": uid, "token": token}
    result = requests.post(post_url, data=post_data)
    content = result.text
    return Response(content)


@api_view(["POST"])
@permission_classes([permissions.AllowAny])
def member_signup_view(request):
    """ 
    View to create a new user, this is used for signup.
    """
    user_serializer = CustomUserCreateSerializer(data=request.data)
    if user_serializer.is_valid(raise_exception=True):
        validated_user_data = user_serializer.data
        MemberSignupService().execute(user_data=validated_user_data)
        return Response(status=status.HTTP_201_CREATED)


class HelloWorldView(APIView):
    # Test view to test authentication

    def get(self, request):
        return Response(data={"hello": "world"}, status=status.HTTP_200_OK)

