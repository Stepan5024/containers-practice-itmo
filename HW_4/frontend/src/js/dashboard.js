import '../css/styles.css'; // Подключение глобальных стилей (опционально)
import '../css/dashboard.css'; // Подключение глобальных стилей (опционально)

// Проверка авторизации при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    const token = localStorage.getItem('token');
    //if (!token) {
    //    window.location.href = '/login';
    //    return;
    //}

    // Добавляем токен к каждому запросу
    fetch('/dashboard', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(response => {
        if (!response.ok) {
            throw new Error('Unauthorized');
        }
    }).catch(() => {
    //    window.location.href = '/login';
    });

    checkAuth();
    setupEventListeners();
    loadUserProfile();
});

function checkAuth() {
    const token = localStorage.getItem('token');
    const userEmail = localStorage.getItem('userEmail');

    if (!token || !userEmail) {
    //    window.location.href = '/login';
   //     return;
    }

    document.getElementById('userEmail').textContent = userEmail;
    setupAuthenticatedFetch();
}

function setupAuthenticatedFetch() {
    const token = localStorage.getItem('token');
    const originalFetch = window.fetch;

    window.fetch = function () {
        let [resource, config] = arguments;
        if (!config) {
            config = {};
        }
        if (!config.headers) {
            config.headers = {};
        }

        config.headers['Authorization'] = `Bearer ${token}`;
        config.headers['X-Requested-With'] = 'XMLHttpRequest';

        return originalFetch(resource, config)
            .then(response => {
                if (response.status === 401) {
                 //   logout();
                //    throw new Error('Unauthorized');
                }
                return response;
            });
    };
}

function setupEventListeners() {
    // Обработчик формы профиля
    document.getElementById('profileForm').addEventListener('submit', handleProfileSubmit);

    // Обработчик формы загрузки документов
    document.getElementById('documentUploadForm').addEventListener('submit', handleDocumentUpload);
}

window.switchTab = function(tabId) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    document.querySelector(`.tab[onclick="switchTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');

    // Загрузка данных для выбранной вкладки
    if (tabId === 'documents') {
        loadDocuments();
    }
}

async function loadUserProfile() {
    showLoading(true);
    try {
        const response = await fetch('/api/user/profile');
        if (response.ok) {
            const userData = await response.json();
            fillProfileForm(userData);
        } else {
            // showError('Ошибка загрузки профиля');
        }
    } catch (error) {
        showError('Ошибка соединения с сервером');
        console.error('Error:', error);
    } finally {
        showLoading(false);
    }
}

function fillProfileForm(userData) {
    document.getElementById('profileEmail').value = userData.email || '';
    document.getElementById('profileFirstName').value = userData.firstName || '';
    document.getElementById('profileLastName').value = userData.lastName || '';
    document.getElementById('profileMiddleName').value = userData.middleName || '';
    document.getElementById('profilePhone').value = userData.phoneNumber || '';
}

async function handleProfileSubmit(e) {
    e.preventDefault();
    showLoading(true);

    const formData = {
        firstName: document.getElementById('profileFirstName').value,
        lastName: document.getElementById('profileLastName').value,
        middleName: document.getElementById('profileMiddleName').value,
        phoneNumber: document.getElementById('profilePhone').value
    };

    try {
        const response = await fetch('/api/user/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            showSuccess('Профиль успешно обновлен');
        } else {
            showError('Ошибка при обновлении профиля');
        }
    } catch (error) {
        showError('Ошибка соединения с сервером');
        console.error('Error:', error);
    } finally {
        showLoading(false);
    }
}

async function handleDocumentUpload(e) {
    e.preventDefault();
    showLoading(true);

    const formData = new FormData();
    const fileInput = document.getElementById('documentFile');
    formData.append('file', fileInput.files[0]);

    try {
        const response = await fetch('/documents/upload', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            showSuccess('Документ успешно загружен');
            loadDocuments(); // Перезагружаем список документов
        } else {
            showError('Ошибка при загрузке документа');
        }
    } catch (error) {
        showError('Ошибка соединения с сервером');
        console.error('Error:', error);
    } finally {
        showLoading(false);
        fileInput.value = ''; // Очищаем поле выбора файла
    }
}

async function loadDocuments() {
    showLoading(true);
    try {
        const response = await fetch('/documents');
        if (response.ok) {
            const documents = await response.json();
            displayDocuments(documents);
        } else {
            //showError('Ошибка загрузки документов');
        }
    } catch (error) {
        showError('Ошибка соединения с сервером');
        console.error('Error:', error);
    } finally {
        showLoading(false);
    }
}

function displayDocuments(documents) {
    const documentsList = document.getElementById('documentsList');
    documentsList.innerHTML = documents.length ?
        documents.map(doc => `
                    <div class="document-item">
                        <span>${doc.name}</span>
                        <button onclick="downloadDocument('${doc.id}')">Скачать</button>
                    </div>
                `).join('') :
        '<p>Нет загруженных документов</p>';
}

function showLoading(show) {
    document.getElementById('loading').style.display = show ? 'block' : 'none';
}

function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => errorDiv.style.display = 'none', 5000);
}

function showSuccess(message) {
    const successDiv = document.getElementById('successMessage');
    successDiv.textContent = message;
    successDiv.style.display = 'block';
    setTimeout(() => successDiv.style.display = 'none', 5000);
}

window.logout = function() {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    window.location.href = '/login';
}