import json
import requests
from channels.generic.websocket import WebsocketConsumer


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        tmp_data = {
            "prompt": text_data_json["message"],
            "collection_data": "default",
            "n_results": 3,
            "memory_access_threshold": 1.5,
        }
        llm_answer = requests.post(
            "http://localhost:9000/memory_response/", json=tmp_data
        ).text

        llm_answer = llm_answer[1:-1].replace("\\n\\n", "\n\n").replace("\\n", "\n")

        self.send(
            text_data=json.dumps({"message": llm_answer, "message_belonging": "LLM"})
        )
