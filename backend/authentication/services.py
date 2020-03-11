from django.db import transaction

from .models import CustomUser
from member.models import Member
from common.base_service import BaseService


class MemberSignupService(BaseService):
    """
    Service for creating new Members (used at Member signup)
    """

    def execute(self, user_data):
        with transaction.atomic():
            user = CustomUser.objects.create(**user_data)
            member = Member.objects.create(user=user)
            return member
