from rest_framework import serializers

from .models import CustomUser


class CustomUserListSerializer(serializers.ModelSerializer):
    """
    Serializer that only returns the information to be shown in list views. So,
    all the other fields are not returned by the serializer.
    """

    class Meta:
        model = CustomUser
        fields = ["username"]

