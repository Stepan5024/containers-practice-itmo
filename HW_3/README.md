# Домашнее задание 3

Устанавливаем Docker Desktop, kubectl и minikube. Добавляем kubectl.exe в окружение PATH. Проверяем, что все установлено корректно:

![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-4.png)


Запускаем Minikube c помощью команды **minikube start**. 
![alt text](image.png)

Minikube позволяет создать локальный кластер Kubernetes в виде Docker-контейнера. С помощью команды **docker ps** видим соответствующий контейнер:

![alt text](image-1.png)

Конфигурация созданного кластера выглядит следующим образом:

![alt text](image-5.png)

Создан кластер minikube. По умолчанию в созданном кластере находится 1 узел.

![alt text](image-6.png)

Создадим в текущей директории манифесты Postgres согласно заданию. После этого выполним команды **kubectl create -f filename**, чтобы описанные объекты создались в кластере. 

**Ответ на вопрос**: порядок исполнения не важен, так как Kubernetes обрабатывает каждый ресурс независимо

![alt text](image-7.png)

Проверим успешность создания ресурсов с помощью команд **kubectl get ...**

![alt text](image-8.png)

Ресурсы созданы успешно. Также видим postgres в списке созданных подов:

![alt text](image-9.png)

Теперь создадим **nextcloud.yml** и создадим соответствующий объект в кластере. Создался еще один под:

![alt text](image-12.png)
Создался секрет с паролем администратора, который невозможно посмотреть

![alt text](image-10.png)

![alt text](image-13.png)

![alt text](image-14.png)

![alt text](image-15.png)

![alt text](image-16.png)

![alt text](image-17.png)

Ответ на вопрос: 

![alt text](image-18.png)

