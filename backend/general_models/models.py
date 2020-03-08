from django.db import models


class Framework(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)
    skill_level = models.ForeignKey(
        "SkillLevel", blank=True, null=True, on_delete=models.PROTECT
    )

    def __str__(self):
        return self.name


class ProgrammingLanguage(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)
    skill_level = models.ForeignKey(
        "SkillLevel", blank=True, null=True, on_delete=models.PROTECT
    )
    related_frameworks = models.ManyToManyField(Framework, blank=True)

    def __str__(self):
        return self.name


class Resource(models.Model):
    """
    Currently only supports sharing a resource using a web link, or through text
    in the description or title.
    """

    title = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)
    skill_level = models.ForeignKey(
        "SkillLevel", blank=True, null=True, on_delete=models.PROTECT
    )
    languages = models.ManyToManyField(ProgrammingLanguage)
    frameworks = models.ManyToManyField(Framework)
    web_link = models.URLField()

    def __str__(self):
        return self.title


class SkillLevel(models.Model):
    SKILL_LEVEL_CHOICES = (
        ("beginner", "Beginner"),
        ("intermediate", "Intermediate"),
        ("advanced", "Advanced"),
    )

    level = models.CharField(choices=SKILL_LEVEL_CHOICES, max_length=15, unique=True)

    def __str__(self):
        return self.level
