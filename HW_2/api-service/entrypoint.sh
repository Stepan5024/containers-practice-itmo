#!/bin/sh
python -m uvicorn api_service.views:app --host 0.0.0.0 --port 5000 --workers 2 --root-path /api --log-level debug
