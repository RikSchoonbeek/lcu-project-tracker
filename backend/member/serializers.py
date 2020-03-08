from rest_framework import serializers

from .models import Member
from authentication.serializers import CustomUserListSerializer
from project.serializers import ProjectListSerializer


class MemberListSerializer(serializers.ModelSerializer):
    """
    Serializer that only returns the information to be shown in list views. So,
    all the other fields are not returned by the serializer.
    """

    user = CustomUserListSerializer()

    class Meta:
        model = Member
        fields = ["id", "user"]


class MemberWithProjectsListSerializer(serializers.ModelSerializer):

    project_set = ProjectListSerializer(many=True)
    user = CustomUserListSerializer()

    class Meta:
        model = Member
        fields = ["id", "user", "project_set"]

