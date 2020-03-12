"""
This code is inspired by the GitHub repo that is offered as an example in the
documentation of the djoser library (authentication library for DRF):

- link to docs: https://djoser.readthedocs.io/en/latest/sample_usage.html
"""

from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models

# TODO (riks) it may be helpful to read 'Customizing authentication in Django'
# for a better understanding of what I/we're doing here, or what's needed.
# https://docs.djangoproject.com/en/2.2/topics/auth/customizing/


class CustomUserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, username, email=None, password=None, **extra_fields):
        if not email:
            raise ValueError("Email address is required")
        # TODO (riks) I removed the check for username, turned it into a check
        # for email (since that is what we'll use to log in instead of username).
        # I am not sure if we don't need the check for a username anymore, so I
        # am writing this comment as a reminder that I may need to roll this back.
        email = self.normalize_email(email)
        username = self.model.normalize_username(username)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email=None, password=None, **extra_fields):
        if not email:
            raise ValueError("Email address is required")
        # TODO (riks) I removed the check for username, turned it into a check
        # for email (since that is what we'll use to log in instead of username).
        # I am not sure if we don't need the check for a username anymore, so I
        # am writing this comment as a reminder that I may need to roll this back.
        email = self.normalize_email(email)
        username = self.model.normalize_username(username)
        user = self.model(
            username=username,
            email=email,
            is_staff=True,
            is_superuser=True,
            **extra_fields,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user


class CustomUser(AbstractBaseUser, PermissionsMixin):
    """

    Some explanation of what's going on:
    - USERNAME_FIELD:
        A string describing the name of the field on the user model that is used 
        as the unique identifier. This will usually be a username of some kind, 
        but it can also be an email address, or any other unique identifier.
    - EMAIL_FIELD:
        A string describing the name of the email field on the User model.
    - REQUIRED_FIELDS:
        A list of the field names that will be prompted for when creating a user 
        via the createsuperuser management command. The user will be prompted to 
        supply a value for each of these fields. It must include any field for 
        which blank is False or undefined and may include additional fields you 
        want prompted for when a user is created interactively. REQUIRED_FIELDS 
        has no effect in other parts of Django, like creating a user in the admin.
    """

    username = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    objects = CustomUserManager()

    EMAIL_FIELD = "email"
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = [
        "username",
    ]

    def __str__(self):
        return f"{self.username} - {self.email}"


# The commented out code below functions only as an example
# class ExampleUserManager(BaseUserManager):
#     use_in_migrations = True

#     def create_user(self, email, password=None, **extra_fields):
#         email = self.normalize_email(email)
#         user = self.model(email=email, **extra_fields)
#         user.set_password(password)
#         user.save()
#         return user


# class ExampleUser(AbstractBaseUser):
#     email = models.EmailField(unique=True)
#     is_staff = models.BooleanField(default=True)
#     is_active = models.BooleanField(default=True)

#     objects = ExampleUserManager()

#     EMAIL_FIELD = "email"
#     USERNAME_FIELD = "email"
