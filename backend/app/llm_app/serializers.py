from rest_framework import serializers
from .models import Collection


class CollectionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = (
            "id",
            "name",
            "icon",
        )
