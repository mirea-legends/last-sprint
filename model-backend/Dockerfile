# Use an official Python runtime as a parent image
FROM pytorch/pytorch:2.2.1-cuda12.1-cudnn8-runtime

RUN apt update && \
    apt install --no-install-recommends -y build-essential software-properties-common
# RUN apt-get update && apt-get install -y libc6

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app

COPY requirements.txt .

# Install any needed dependencies specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 9000

# Define environment variable
# ENV NAME World
COPY .env /app/.env
COPY /src /app
# COPY models /app/models # Uncomment this if you are using local quantized model

# Run app.py when the container launches
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "9000"]
