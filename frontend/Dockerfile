# Use an official Python runtime as a parent image
FROM python:3.10-slim

ARG GRADIO_SERVER_PORT=7860
ENV GRADIO_SERVER_PORT=${GRADIO_SERVER_PORT}
# RUN apt-get update && apt-get install -y libc6

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app

# Install any needed dependencies specified in requirements.txt
RUN pip install --no-cache-dir gradio

# Make port 80 available to the world outside this container
EXPOSE 7860


COPY frontend/webui.py /app/webui.py


# Run app.py when the container launches
CMD ["python", "webui.py"]
