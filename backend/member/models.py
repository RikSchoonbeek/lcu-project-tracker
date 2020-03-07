from authentication.models import CustomUser
from django.db import models


class Member(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    # TODO (riks) add topics_of_interest

    def __str__(self):
        return self.user.username
