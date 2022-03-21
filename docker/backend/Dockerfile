FROM python:3.10

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/app/

COPY ./backend/Pipfile ./backend/Pipfile.lock ./backend/

RUN apt-get update && apt-get install -y \
    libjpeg-dev zlib1g-dev

RUN pip install --upgrade pip \
    && pip install pipenv gunicorn


RUN cd ./backend/ && pipenv install --system --deploy --ignore-pipfile

COPY ./docker/ ./docker/
COPY ./backend/ ./backend/

