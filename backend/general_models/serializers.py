from rest_framework import serializers

from .models import Framework, ProgrammingLanguage, Resource, SkillLevel


class FrameworkListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Framework
        fields = [
            "id",
            "name",
        ]


class ProgrammingLanguageListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgrammingLanguage
        fields = [
            "id",
            "name",
        ]


class ResourceListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = [
            "id",
            "title",
        ]


class SkillLevelListSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillLevel
        fields = [
            "id",
            "level",
        ]

