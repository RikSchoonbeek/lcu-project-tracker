from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from .serializers import ProgressListListSerializer
from .services import list_progress_lists


class ProgressListViewSet(ViewSet):
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
        instances = list_progress_lists()
        serializer = ProgressListListSerializer(instance=instances, many=True)
        serialized_instances = serializer.data
        response_data = {"progress_lists": serialized_instances}
        return Response(response_data)
