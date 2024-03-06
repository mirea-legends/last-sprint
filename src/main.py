from llm_agent import LLMAgent
from llm import LlamaCPPLLM
from embedder import HFEmbedder
from chroma_client import ChromaClient
from fastapi import FastAPI
from typing import List, Optional, Union




llm = LlamaCPPLLM('models/mistral-7b-instruct-v0.2.Q4_K_M.gguf')
    
embedder = HFEmbedder()

chroma_client = ChromaClient(
    host='chromadb', port=8000,
    collection_name="memory", 
    embedder = embedder
)

llm_agent = LLMAgent(llm, chroma_client)




app = FastAPI()

@app.post("/response")
def response(
    prompt: str = "",
):
    generated_text_response = llm_agent.response(prompt)

    generated_text = generated_text_response['choices'][0]['text']

    return generated_text


@app.post("/memory_response")
def memory_response(
    prompt: str = "",
):
    generated_text_response = llm_agent.memory_response(prompt)

    generated_text = generated_text_response['choices'][0]['text']

    return generated_text



@app.post("/add_memory")
def add_memory(
    text: str = "",
):
    chroma_client.add(text) if text != "" else None

    return "OK"

@app.post("/delete_memory")
def delete_memory(
    id: str = "",
):
    chroma_client.delete(id) if id != "" else None

    return "OK"


@app.post("/query_memory")
def query_memory(
    query: str = "",
    n_results: int = 3,
    return_text: bool = True
):
    return chroma_client.query(query, n_results, return_text)