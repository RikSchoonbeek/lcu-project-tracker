from django.db import models

from member.models import Member


class ProgressList(models.Model):
    """
    TODO (riks) add docstring describing this model
    """

    member = models.OneToOneField(Member, on_delete=models.CASCADE)

    def __str__(self):
        return f"Progress list of {self.member.user.username}"


class ProgressListItem(models.Model):
    """
    TODO (riks) add docstring describing this model
    """

    STATUS_CHOICES = (
        ("todo", "Planning to do"),
        ("doing", "Currently doing"),
        ("done", "Done in past"),
    )

    title = models.CharField(max_length=45)
    status = models.CharField(max_length=5, choices=STATUS_CHOICES, default="todo")
    progress_list = models.ForeignKey(ProgressList, on_delete=models.CASCADE)
    item_type = models.ForeignKey(
        "ProgressListItemType", on_delete=models.PROTECT, null=True, blank=False
    )

    def __str__(self):
        return self.title


class ProgressListItemType(models.Model):
    """
    TODO (riks) add docstring describing this model
    """

    title = models.CharField(max_length=30)

    def __str__(self):
        return self.title

