# containers-practice-itmo

Лаба №2
Содержит 2 сервиса и 1 init
сервисы - БД, Апишка на питоне
init - сервис для миграции БД основан на гошной либе migrate

Конфиги тянутся автоматически из .env, он приложен

Вопросы:

1. Ограничивать реурсы можно выглядит это примерно так

```dockerfile
 deploy:
      resources:
        limits:
          memory: 1024M
```
или так 
```dockerfile
    deploy:
      resources:
        reservations:
          devices:
            - capabilities: [ gpu ]
              driver: nvidia
              count: 1
```

2. Запустить сервис отдельно можно командой:
```dockerfile
docker compose up <-d> <--build> <service-name>
```