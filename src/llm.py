from typing import List, Optional, Any
from gpt4all import GPT4All
from llama_cpp import Llama

class BaseLLM():
    def __init__(self, model_name: Optional[str] = None, model_path: Optional[str] = None) -> None:
        self.chat_prompt_template = "[INST] {prompt} [/INST]"
        self.streaming = False

        self.prompt_templates = {
        "memory": "By considering below input memories from me, answer the question if its provided in memory, else just answer without memory:\n`{text}`\nMEMORY CHUNKS:\n{context}",
        }

    def generate(self, request: str, streaming: bool) -> Any:
        raise NotImplementedError

    def response(self, request: str) -> Any:
        return self.generate(self.chat_prompt_template.format(prompt = request), streaming = self.streaming)

    def memory_response(self, request: str, memory_queries: List[str]) -> Any:
        context = ""
        for i, query in enumerate(memory_queries):
            context += f"MEMORY CHUNK {i}: {query}\n"

        queries = self.prompt_templates['memory'].format(text = request, context = context)
        
        return self.generate(self.chat_prompt_template.format(prompt = queries),  streaming = self.streaming)

class GPT4AllLLM(BaseLLM):
    def __init__(self, model_name: Optional[str] = None, model_path: Optional[str] = None) -> None:
        super().__init__(model_name, model_path)
        
        self.gpt = GPT4All(model_name = model_name, model_path = model_path, n_ctx=8192, verbose=True)

    def generate(self, request: str, streaming: bool) -> Any:
        return self.gpt.generate(prompt = request, max_tokens=1024, streaming = streaming)

class LlamaCPPLLM(BaseLLM):
    def __init__(self, model_name: Optional[str] = None) -> None:
        super().__init__(model_name)
        
        self.gpt = Llama(model_path = model_name, n_ctx=8192, verbose=True)

    def generate(self, request: str, streaming: bool) -> Any:
        return self.gpt.create_completion(prompt = request, max_tokens=1024, stream = streaming)