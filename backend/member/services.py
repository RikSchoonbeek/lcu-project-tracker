from .models import Member


def member_list_service():
    return Member.objects.all()


def member_list_with_projects_service():
    return Member.objects.all().prefetch_related("project_set")
