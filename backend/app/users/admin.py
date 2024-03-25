from django.contrib import admin
from .models import Subscription, SubscriptionLevel, User


admin.site.register(SubscriptionLevel)
admin.site.register(Subscription)
admin.site.register(User)
