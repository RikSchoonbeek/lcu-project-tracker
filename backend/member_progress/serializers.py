from rest_framework import serializers

from .models import ProgressList, ProgressListItem, ProgressListItemType
from member.serializers import MemberListSerializer


class ProgressListItemTypeDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgressListItemType
        fields = ["id", "title"]


class ProgressListItemDetailSerializer(serializers.ModelSerializer):
    item_type = ProgressListItemTypeDetailSerializer()

    class Meta:
        model = ProgressListItem
        fields = ["title", "status", "item_type"]


class ProgressListListSerializer(serializers.ModelSerializer):
    member = MemberListSerializer()
    progresslistitem_set = ProgressListItemDetailSerializer(many=True)

    class Meta:
        model = ProgressList
        fields = ["member", "progresslistitem_set"]
