import json
import requests
import urllib3
import uuid
from dotenv import dotenv_values
from typing import List, Optional, Any
from llama_cpp import Llama

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


class BaseLLM():
    def __init__(self, model_name: Optional[str] = None, model_path: Optional[str] = None) -> None:
        self.chat_prompt_template = "[INST] {prompt} [/INST]"
        # self.chat_prompt_template = "<|user|>\n{prompt}<|endoftext|>\n<|assistant|>"
        self.streaming = False

        self.prompt_templates = {
        "memory_en": "By considering below input memories from me, answer the question if its provided in memory, else just answer without memory:\n`{text}`\nMEMORY CHUNKS:\n{context}",
        "memory_ru": "Учитывая следующие входные данные из ячеек памяти, ответьте на вопрос, если он предоставлен в ячейках памяти, в противном случае просто ответьте без использования ячейек памяти:\n`{text}`\nЯчейки памяти:\n{context}",
        "memory_delimiter_en": "MEMORY CHUNK {i}: {query}\n",
        "memory_delimiter_ru": "ЯЧЕЙКА ПАМЯТИ {i}: {query}\n",
        }

    def generate(self, request: str, streaming: bool) -> Any:
        raise NotImplementedError

    def response(self, request: str) -> Any:
        return self.generate(self.chat_prompt_template.format(prompt = request), streaming = self.streaming)

    def memory_response(self, request: str, memory_queries: List[str]) -> Any:
        context = ""
        for i, query in enumerate(memory_queries):
            context += self.prompt_templates['memory_delimiter_ru'].format(i = i, query = query)

        queries = self.prompt_templates['memory_ru'].format(text = request, context = context)
        
        return self.generate(self.chat_prompt_template.format(prompt = queries),  streaming = self.streaming)

class LlamaCPPLLM(BaseLLM):
    def __init__(self, model_name: Optional[str] = None) -> None:
        super().__init__(model_name)
        
        self.gpt = Llama(model_path = model_name, n_ctx=8192, verbose=True)

    def generate(self, request: str, streaming: bool) -> Any:
        return self.gpt.create_completion(prompt = request, max_tokens=1024, stream = streaming)
    
class GigaChatLLM(BaseLLM):
    def __init__(self) -> None:
        super().__init__()
        self.auth_data = dotenv_values(".env")['AUTH_DATA']
        self.message_history = []


    def get_access_token(self):
        url = 'https://ngw.devices.sberbank.ru:9443/api/v2/oauth'
        headers = {
            'Authorization': f'Bearer {self.auth_data}',
            'RqUID': f'{uuid.uuid4()}',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        data = {
            'scope': 'GIGACHAT_API_PERS'
        }

        response = requests.post(url, headers=headers, data=data, verify=False)

        return response.json()['access_token']

    def ensure_fit(self, max_tokens = 2048):
        total_tokens = sum(message['tokens'] for message in self.message_history)
        while total_tokens > max_tokens:
            removed_message = self.message_history.pop(0)
            total_tokens -= removed_message['tokens']

    def update_message_history(self, text, response_json):
        self.message_history.append({
            "role": "user",
            "content": text,
            "tokens": response_json['usage']['prompt_tokens']
        })

        self.message_history.append({
            "role": "assistant",
            "content": response_json['choices'][0]['message']['content'],
            "tokens": response_json['usage']['completion_tokens']
        })
    

    def generate(self, text, use_history = False):
        url = 'https://gigachat.devices.sberbank.ru/api/v1/chat/completions'

        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {self.get_access_token()}',
        }

        self.ensure_fit()
        
        data = {
            "model": "GigaChat:latest",
            "messages": [
            ] + self.message_history + [
                {
                "role": "user",
                "content": text
                }
            ] if use_history else [
                {
                "role": "user",
                "content": text
                }
            ],
            "temperature": 0.7
        }

        response = requests.post(url, headers=headers, data = json.dumps(data), verify=False)

        self.update_message_history(text, response.json())

        return response.json()['choices'][0]['message']['content']
    
    def response(self, request: str) -> Any:
        return self.generate(request)

    def memory_response(self, request: str, memory_queries: List[str]) -> Any:
        context = ""
        for i, query in enumerate(memory_queries):
            context += self.prompt_templates['memory_delimiter_ru'].format(i = i, query = query)

        request = self.prompt_templates['memory_ru'].format(text = request, context = context)
        
        return self.generate(request)