FROM  python:3-alpine

ENV PYTHONUNBUFFERED=1

WORKDIR /backend

COPY . .

RUN pip install -r requirements.txt

EXPOSE 8000