from django.urls import path

from . import consumers

websocket_urlpatterns = [
    path("ws/llm-chat/", consumers.ChatConsumer.as_asgi()),
]
