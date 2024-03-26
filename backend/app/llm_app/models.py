from django.db import models
from users.models import SubscriptionLevel


class Collection(models.Model):
    """Модель коллекций"""

    name = models.CharField(
        max_length=255,
        unique=True,
    )
    access_level = models.ForeignKey(
        SubscriptionLevel,
        on_delete=models.CASCADE,
    )
    icon = models.ImageField(
        upload_to="collections/icons",
        blank=True,
    )

    def __str__(self) -> str:
        return f"{self.name} [Access level: {self.access_level.name}]"
