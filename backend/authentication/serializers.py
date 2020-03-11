from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import CustomUser
from member.models import Member


class CustomUserCreateSerializer(serializers.ModelSerializer):
    # TODO (riks) create a test to make sure this serializer can't return
    # password data.
    """
    This serializer is for CREATING USERS ONLY, not for sending their data
    to the frontend, since this serializer includes the password field.
    
    Got this from:
    https://hackernoon.com/110percent-complete-jwt-authentication-with-django-and-react-2020-iejq34ta
    """

    class Meta:
        model = CustomUser
        fields = ("email", "username", "password")
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(
            **validated_data
        )  # as long as the fields are the same, we can just use this
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class CustomUserDetailSerializer(serializers.ModelSerializer):
    """
    Serializer that returns the information to be shown in detail views.
    """

    class Meta:
        model = CustomUser
        fields = ["id", "username"]


class CustomUserListSerializer(serializers.ModelSerializer):
    """
    Serializer that only returns the information to be shown in list views. So,
    all the other fields are not returned by the serializer.
    """

    class Meta:
        model = CustomUser
        fields = ["id", "username"]
