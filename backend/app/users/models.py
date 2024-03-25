from django.db import models
from django.contrib.auth.models import AbstractUser


class SubscriptionLevel(models.Model):
    """Модель уровня подписки"""

    name = models.CharField(max_length=255, unique=True)
    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
    )

    def __str__(self) -> str:
        return f"{self.name} - {self.price} RUB"


class User(AbstractUser):
    """Модель пользователя"""

    pass


class Subscription(models.Model):
    """Модель подписки"""

    level = models.ForeignKey(SubscriptionLevel, on_delete=models.CASCADE)
    registration_date = models.DateTimeField(auto_now_add=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"Subscription of {self.user.username} [level:{self.level.name} until {self.registration_date}]"
