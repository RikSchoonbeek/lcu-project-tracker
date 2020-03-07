# standard library
# non standard library
# django & drf modules
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

# custom modules
from .serializers import MemberListSerializer
from .services import member_list_service


class MemberViewSet(ViewSet):
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
        member_list = member_list_service()
        serializer = MemberListSerializer(instance=member_list, many=True)
        serialized_member_list = serializer.data
        response_data = {"member_list": serialized_member_list}
        return Response(response_data)
