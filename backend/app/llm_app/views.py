from rest_framework import generics
from .models import Collection
from users.models import Subscription
from .serializers import CollectionsSerializer


class CollectionsViewSet(generics.ListAPIView):
    queryset = Collection.objects.all()
    serializer_class = CollectionsSerializer

    def list(self, request, *args, **kwargs):
        # qs = (
        #     Subscription.objects.select_related("user")
        #     .filter(user=self.request.user)
        #     .order_by("-registration_date")
        # ).first()
        # print(qs)
        return super().list(request, *args, **kwargs)
