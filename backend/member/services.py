from .models import Member


def member_list_service():
    return Member.objects.all()
