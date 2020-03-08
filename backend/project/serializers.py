from rest_framework import serializers

from .models import ProjectIdea
from general_models.serializers import (
    FrameworkListSerializer,
    ProgrammingLanguageListSerializer,
    ResourceListSerializer,
    SkillLevelListSerializer,
)


class ProjectIdeaListSerializer(serializers.ModelSerializer):
    recommended_frameworks = FrameworkListSerializer(many=True)
    recomended_languages = ProgrammingLanguageListSerializer(many=True)
    skill_level = SkillLevelListSerializer()

    class Meta:
        model = ProjectIdea
        fields = [
            "id",
            "title",
            "description",
            "recommended_frameworks",
            "recomended_languages",
            "skill_level",
        ]


class ProjectListSerializer(serializers.ModelSerializer):
    frameworks = FrameworkListSerializer(many=True)
    languages = ProgrammingLanguageListSerializer(many=True)
    project_idea = ProjectIdeaListSerializer(many=True)
    resources = ResourceListSerializer(many=True)
    skill_level = SkillLevelListSerializer()

    class Meta:
        model = ProjectIdea
        fields = [
            "id",
            "title",
            "description",
            "frameworks",
            "languages",
            "project_idea",
            "resources",
            "skill_level",
        ]

