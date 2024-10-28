import uvicorn
from fastapi import FastAPI, Depends
from .schemas import (
    VersionModel
)

app = FastAPI(
    title='API Service',
    version='0.1',
    description="Test API Service",
    root_path="/api/v1"
)


@app.get(
    '/version',
    description='Возвращает версию API',
    responses={
        200: {'description': 'Версия API', 'content': {'application/json': {'example': '0.1.0'}}}
    }
)
async def get_version() -> VersionModel:
    return VersionModel(
        version=app.version
    )


if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8020)
