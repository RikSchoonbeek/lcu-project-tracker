from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from .serializers import ProjectIdeaListSerializer
from .services import ListProjectIdeas


class ProjectIdeaViewSet(ViewSet):
    """
    These methods can be added, corresponding to different urls:
    - delete            /member/<member id>/    DELETE
    - list              /member/                GET
    - retrieve          /member/<member id>/    GET
    - update            /member/<member id>/    PUT
    - partial_update    /member/<member id>/    PATCH
    """

    permission_classes = (AllowAny,)

    def list(self, request, *args, **kwargs):
        project_ideas = ListProjectIdeas().execute()
        serializer = ProjectIdeaListSerializer(instance=project_ideas, many=True)
        serialized_project_ideas = serializer.data
        response_data = {"project_ideas": serialized_project_ideas}
        return Response(response_data)
