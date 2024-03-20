from llm_agent import LLMAgent
from llm import LlamaCPPLLM, GigaChatLLM
from embedder import HFEmbedder
from chroma_client import ChromaClient
from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional, Union


# llm = LlamaCPPLLM('models/mistral-7b-instruct-v0.2.Q4_K_M.gguf')
llm = GigaChatLLM()

embedder = HFEmbedder()

chroma_client = ChromaClient(host="chromadb", port=8000, embedder=embedder)

llm_agent = LLMAgent(llm, chroma_client)


app = FastAPI()

origins = [
    "http://localhost:8080",  # Django сервер
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/response")
def response(
    prompt: str = Body(default="Hello!", embed=True),
):
    generated_text_response = llm_agent.response(prompt)

    # generated_text = generated_text_response['choices'][0]['text']
    generated_text = generated_text_response

    return generated_text


@app.post("/memory_response")
def memory_response(
    prompt: str = Body(default="Hello!", embed=True),
    collection_name: str = Body(default="default", embed=True),
    n_results: int = Body(default=3, embed=True),
    memory_access_threshold: float = Body(default=1.5, embed=True),
):
    generated_text_response = llm_agent.memory_response(
        prompt, collection_name, n_results, memory_access_threshold
    )

    # generated_text = generated_text_response['choices'][0]['text'] # LlamaCPPLLM
    generated_text = generated_text_response

    return generated_text


@app.post("/add_memory")
def add_memory(
    text: str = Body(default=None, embed=True),
    collection_name: str = Body(default="default", embed=True),
):
    chroma_client.add(text, collection_name) if text != "" else None

    return "OK"


@app.post("/delete_memory")
def delete_memory(
    id: str = Body(default=None, embed=True),
    collection_name: str = Body(default="default", embed=True),
):
    chroma_client.delete(id, collection_name) if id != "" else None

    return "OK"


@app.post("/query_memory")
def query_memory(
    query: str = Body(default=None, embed=True),
    n_results: int = Body(default=3, embed=True),
    return_text: bool = Body(default=True, embed=True),
    collection_name: str = Body(default="default", embed=True),
):
    return chroma_client.query(query, n_results, return_text, collection_name)


@app.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: int):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            await websocket.send_text(f"Message text was: {data}")
    except:
        pass
