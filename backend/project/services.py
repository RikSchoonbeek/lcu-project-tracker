from rest_framework.response import Response

from common.base_service import BaseService
from project.models import ProjectIdea


class ListProjectIdeas(BaseService):
    def execute(self):
        # TODO add filtering
        return ProjectIdea.objects.all()
