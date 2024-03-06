from llm import BaseLLM
from chroma_client import ChromaClient
from utils import logging



enable_logging = True




class LLMAgent():
    def __init__(
        self, 
        llm: BaseLLM = None, 
        chroma: ChromaClient = None, 
    ) -> None:

        self.llm = llm
        self.chroma = chroma
        self.memory_access_threshold = 1.5
        # self.similarity_threshold = 0.5 # [0; 1]
        self.db_n_results = 3
        self.se_n_results = 3
       

    @logging(enable_logging, message = "[Adding to memory]")
    def add(self, request):
        self.chroma.add(request) if request != "" else None

        response = self.llm.response(request)

        return response

    @logging(enable_logging, message = "[Querying memory]")
    def memory_response(self, request):
        memory_queries_data = self.chroma.query(request, n_results = self.db_n_results, return_text = False)
        memory_queries = memory_queries_data['documents'][0]
        memory_queries_distances = memory_queries_data['distances'][0]

        acceptable_memory_queries = []

        for query, distance in list(zip(memory_queries, memory_queries_distances)):
            # print(f"Query: {query}, Distance: {distance}")
            if distance < self.memory_access_threshold:
            # if (1 - distance) >= self.similarity_threshold:
                acceptable_memory_queries.append(query)

        if len(acceptable_memory_queries) > 0:
            response = self.llm.memory_response(request, acceptable_memory_queries)
        else:
            response = self.llm.response(request) #TODO: add another solution

        return response

    @logging(enable_logging, message = "[Response]")
    def response(self, request):
        return self.llm.response(request)

    
    # def generate(self, request: str):
    #     if request.upper().startswith("MEM"):
    #         response = self.memory_response(request[len("MEM"):])
    #     elif request.upper().startswith("REMEM"): #and len(acceptable_memory_queries) == 0
    #         response = self.add(request[len("REMEM"):])
    #     else:
    #         response = self.response(request)
            
    #     return response

