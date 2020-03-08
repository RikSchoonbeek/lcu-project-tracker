from django.contrib import admin
from .models import Framework, ProgrammingLanguage, Resource, SkillLevel


@admin.register(Framework)
class FrameworkInline(admin.ModelAdmin):
    model = Framework


@admin.register(ProgrammingLanguage)
class ProgrammingLanguageInline(admin.ModelAdmin):
    model = ProgrammingLanguage


@admin.register(Resource)
class ResourceInline(admin.ModelAdmin):
    model = Resource


@admin.register(SkillLevel)
class SkillLevelInline(admin.ModelAdmin):
    model = SkillLevel
