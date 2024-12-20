# Цели проекта
Цель: автоматическое выявление расхождений и несоответствий, что позволит ускорить юридический контроль и снизить риск ошибок.  

Основная задача – создание автоматизированной системы для юридической поддержки, которая выполняет сравнение загруженных договоров или других юридических документов с типовой формой предприятия (НЛМК)  

Функциональные блоки

OCR   Преобразование изображений или сканированных документов в машиночитаемый текст


Анализ структуры   Анализ структуры и поиск различий между документами. (rule based подходы и на основе llm и т.д.).

БД Хранилище типовых форм документов НЛМК, с которыми происходит сравнение


Модуль генерации отчетов   Формирование отчёта о выявленных несоответствиях, включая их тип, местоположение в документе и рекомендации по их исправлению

[Adapter] Блок для интеграции с внешними сервисами   Возможность интеграции с существующими системами


Frontend   Пользователь может загружать договоры или другие юридические документы в системе. Поддерживаются различные форматы, такие как PDF, DOCX и другие.


1. Разработка алгоритма распознавания копий
Алгоритм, способный обнаруживать копии документов, даже если они подверглись видоизменению, таким как поворот, сжатие или наложение фильтра.
2. Внедрить OCR, чтобы преобразовывать сканы и фотографии документов в машиночитаемый текст
3. Анализ содержимого документа. 
Анализа структуры оригинала и поиска различий в копиях
4. Автоматизация юридической проверки
Разработать систему автоматического сравнения загруженных юридических документов с типовыми формами
5. Создать модуль отчетности. 
Разработать отчёты с типами, местоположением и рекомендациями по исправлению выявленных несоответствий.
6. Внедрить адаптер для интеграции с внешними системами, облегчая внедрение в текущую IT-инфраструктуру.

# Видение проекта через 3 месяца (к январю 2025 года)
К январю 2025 года система сможет:
1. Автоматически сравнивать загруженные документы с типовыми формами, обнаруживать расхождения и выдавать результаты анализа с минимальной задержкой.
2. Распознавать текст из изображений и сканов, независимо от исходного качества и видоизменений (сжатие, фильтры, поворот).
3. Находить и фиксировать ключевые различия между документами, используя структурный и семантический анализ.
4. Автоматически генерировать отчёты с подробными результатами анализа, включая типы и местоположение расхождений.
5. Поддерживать интеграцию с внешними системами через API для отправки уведомлений и хранения данных в базах данных.
6. Предоставлять пользователям интерфейс для загрузки документов и проверки соответствия с типовыми формами предприятия, поддерживая форматы PDF и DOCX.

# Задачи

## Системный аналитик
1. Проектирование архитектуры: Разработать общую архитектуру системы, включая блоки OCR, анализа структуры, генерации отчётов, БД и интерфейсов.
2. Создание базы данных для хранения типовых форм: Разработать структуру БД для хранения типовых форм и историй проверок.
3. Проектирование API для интеграции с внешними системами.

## ML-инженер
1. Выбор и настройка OCR модуля: Исследовать и выбрать подходящий OCR инструмент (например, Tesseract или EasyOCR), провести начальную настройку для работы с текстами низкого качества.
2. Разработка модуля для анализа структурных изменений: Создать алгоритм для поиска отличий в структуре и содержимом документов, включая проверку размеров и позиций элементов.
3. Создание алгоритма для визуального сравнения: Настроить алгоритм для нахождения расхождений в видоизменённых изображениях (цвет, сжатие, поворот).
4. Создание аугментации данных. Применение на оригинале искусственных искажений
5. Обработка поворотов и изменений масштаба: Настроить алгоритм на идентификацию одинаковых документов при изменении масштаба или поворота.
6. Валидация OCR данных: Обеспечить корректное преобразование сканов и изображений в машиночитаемый текст.
7. Алгоритм поиска копий: Настроить алгоритм, чтобы он находил похожие изображения и тексты даже при видоизменениях.
8. Провести обучение и донастройку модели LLM для анализа текста и рекомендаций.

## Backend-разработчик
1. Модуль для интеграции с внешними системами: Разработать адаптеры для подключения к системам управления документами и юридическим платформам.
2. Реализовать систему генерации отчётов с выводом типа, местоположения и рекомендаций по устранению несоответствий.
3. Создать API для возможности интеграции с внешними системами.
4. Разработка адаптеров для подключения к юридическим платформам.
5. Добавить логирование и мониторинг для отслеживания работы системы и выявления ошибок.
6. Реализовать распределение прав доступа для различных категорий пользователей.
## Frontend-разработчик
1. Создать пользовательский интерфейс для загрузки и проверки документов.
2. Реализовать поддержку загрузки файлов различных форматов, таких как PDF и DOCX, и их конвертацию в JPEG.
3. Реализовать уведомления о статусе загрузки и анализа документов.

## Продукт-менеджер
1. Провести проблемные интервью 10 ноябрь и 10 декабрь
2. Составление дорожной карты развития проекта
3. Финансовое моделирование (unit экономика)
4. Расшифровка проблемных интервью (кто ЦА, какие сегменты, уникальное коммерческое предложение)

# Метрики для оценки успеха проекта
1) Процент корректно выявленных пиратских копий среди всех обнаруженных. 
2) Количество ложных срабатываний
3) Время анализа документа
4) Пользователь может получать рекомендации по исправлению расхождений в документе
5) Пользователь может загружать документы в разных форматах (PDF, DOCX), конвертируемые в анализируемый формат без видимой задержки.
6) Пользователь может видеть отчёт по результатам анализа с количеством ошибок и общим процентом соответствия с эталоном.

Ответы на вопросы:
1) Опишите шаги, которые вы планируете выполнить для получения результата и качественного развития вас за этот семестр на выбранном треке
2) На какой результат вы договорились с научным руководителем? Какова цель вашей работы в этом семестре?