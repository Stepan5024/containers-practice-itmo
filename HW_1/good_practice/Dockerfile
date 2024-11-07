FROM python:3.11.7-slim
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends curl libpangocairo-1.0-0 && apt install build-essential -y
COPY requirements.txt requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt --no-cache-dir
COPY ./src ./

VOLUME ./testdata /opt/app/data


EXPOSE 5000

COPY entrypoint.sh ./


CMD ["bash", "entrypoint.sh"]
