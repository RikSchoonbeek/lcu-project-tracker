from django.db import models

from general_models.models import Framework, ProgrammingLanguage, Resource, SkillLevel
from member.models import Member


class Project(models.Model):
    """
    A project that someone actually works on.
    """

    title = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)
    skill_level = models.ForeignKey(
        SkillLevel, blank=True, null=True, on_delete=models.PROTECT
    )
    frameworks = models.ManyToManyField(Framework, blank=True)
    languages = models.ManyToManyField(ProgrammingLanguage, blank=True)
    members = models.ManyToManyField(Member, blank=True)
    project_idea = models.ManyToManyField("ProjectIdea", blank=True)
    resources = models.ManyToManyField(Resource, blank=True)

    def __str__(self):
        return self.title


class ProjectIdea(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)
    skill_level = models.ForeignKey(
        SkillLevel, blank=True, null=True, on_delete=models.PROTECT
    )
    recomended_languages = models.ManyToManyField(ProgrammingLanguage, blank=True)
    recommended_frameworks = models.ManyToManyField(Framework, blank=True)

    def __str__(self):
        return self.title
