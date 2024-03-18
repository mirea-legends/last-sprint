import chromadb
import uuid
import datetime
from embedder import BaseEmbedder


class ChromaClient:
    def __init__(self, host, port, embedder: BaseEmbedder = None):
        self.embedder = embedder
        self.client = chromadb.HttpClient(host=host, port=port)

    def add(self, text, collection_name="default", metadata={}):
        collection = self.client.get_or_create_collection(
            name=collection_name, embedding_function=self.embedder
        )
        metadata["timestamp"] = str(datetime.datetime.now())

        collection.add(documents=[text], metadatas=[metadata], ids=[str(uuid.uuid4())])

    def delete(self, id, collection_name="default"):
        collection = self.client.get_or_create_collection(
            name=collection_name, embedding_function=self.embedder
        )
        collection.delete(id)

    def query(self, query, n_results, return_text=True, collection_name="default"):
        collection = self.client.get_or_create_collection(
            name=collection_name, embedding_function=self.embedder
        )
        query = collection.query(
            query_texts=query,
            n_results=n_results,
        )

        if return_text:
            return query["documents"][0]
        else:
            return query


# collection_operator = CollectionOperator("total-memory", embedder = HFEmbedder())
# collection_operator.add("Memory refers to the psychological processes of  storing information")
# results = collection_operator.query("What is a memory?", 1, return_text = False)
# print(results)
# print(collection_operator.client.list_collections())
# print(len(collection_operator.collection.get()["ids"]))
# print(collection_operator.collection.get()["ids"])
# print(collection_operator.collection.get()["documents"])
# collection_operator.collection.delete('b10b92b8-e1db-4428-874b-256e51f52117')
