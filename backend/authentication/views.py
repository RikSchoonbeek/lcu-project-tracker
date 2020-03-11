from rest_framework import status, permissions
from rest_framework.decorators import (
    api_view,
    permission_classes,
)
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet

from .serializers import CustomUserCreateSerializer
from member.serializers import MemberDetailSerializer
from .services import MemberSignupService


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

