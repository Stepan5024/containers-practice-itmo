# Дашборд - Find-My-Doc

## 📌 Цель
HTML-файл представляет собой страницу дашборда веб-приложения **Find-My-Doc**, предоставляющую пользователю доступ к персональной информации, последним действиям и документам. Включает вкладки для управления профилем, просмотра документов и общей информации.

---

## 🛠 Структура

### 1. Шапка (Header):
- **Заголовок страницы:** "Find-My-Doc".
- **Элементы управления:**
  - `#userEmail` — отображение текущего email пользователя.
  - Кнопка "Выйти" — завершает сеанс и вызывает функцию `logout()`.

---

### 2. Основной блок (Container):
#### Общие элементы:
- **Сообщения:**
  - `#loading` — индикатор загрузки с текстом "Загрузка...".
  - `#errorMessage` — отображение ошибок.
  - `#successMessage` — отображение успешных действий.

#### Вкладки (Tab Container):
1. **Главная (Dashboard):**
   - Заголовок: "Добро пожаловать!".
   - **Блок "Последние действия":**
     - Содержит элемент `#recentActivity` для отображения списка последних действий пользователя.
   
2. **Профиль (Profile):**
   - Заголовок: "Профиль пользователя".
   - **Форма редактирования профиля (Profile Form):**
     - Поля для редактирования:
       - Email (только для чтения).
       - Имя, фамилия, отчество, телефон.
     - Кнопка "Сохранить изменения" для отправки изменений.

3. **Документы (Documents):**
   - Заголовок: "Мои документы".
   - **Форма загрузки документов:**
     - Поле для выбора файла (принимает `.pdf`, `.doc`, `.docx`).
     - Кнопка "Загрузить" для отправки файла.
   - Блок `#documentsList` для отображения списка загруженных документов.

---

### 3. Стили и скрипты:
- **CSS:**
  - `styles.css` — общие стили приложения.
  - `dashboard.css` — стили, относящиеся к странице дашборда.
- **JavaScript:**
  - `dashboard.js` — обработка взаимодействий на странице.
  - `dashboard.bundle.js` — дополнительные скрипты для функциональности.

---

## 📄 Контент

### 1. Текст:
- Заголовки вкладок, пояснения и названия кнопок.

### 2. Навигация:
- Вкладки переключаются с помощью функции `switchTab(tabId)`, отображая соответствующий контент.

### 3. Стилизация:
- Оформление вкладок, форм и информационных блоков через CSS.
- Интерактивность и управление вкладками через JavaScript.

---