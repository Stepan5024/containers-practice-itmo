FROM python:3.11.7
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends curl libpangocairo-1.0-0 && apt install build-essential -y
ADD requirements.txt requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt && pip cache purge
COPY ./ ./

EXPOSE 5000

CMD gunicorn main:app --workers 1 --worker-class uvicorn.workers.UvicornWorker --bind=0.0.0.0:8000