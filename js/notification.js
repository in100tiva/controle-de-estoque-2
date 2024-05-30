const notificationIcon = document.getElementById('notification-icon');
const notificationDropdown = document.getElementById('notification-dropdown');
const notificationCount = document.getElementById('notification-count');
const notificationItems = document.getElementById('notification-items');

let notifications = [];

export const checkExpiryDates = (products) => {
    notifications = [];
    const today = new Date().toISOString().split('T')[0];
    products.forEach(product => {
        const daysToExpiry = Math.ceil((new Date(product.expiry) - new Date(today)) / (1000 * 60 * 60 * 24));
        if (daysToExpiry <= 7) {
            notifications.push(`O produto ${product.name} está próximo da validade (${product.expiry})!`);
        }
    });
    updateNotificationUI();
};

const updateNotificationUI = () => {
    notificationCount.textContent = notifications.length;
    notificationItems.innerHTML = '';
    if (notifications.length > 0) {
        notifications.forEach(notification => {
            const item = document.createElement('div');
            item.classList.add('notification-item');
            item.textContent = notification;
            notificationItems.appendChild(item);
        });
    } else {
        notificationItems.innerHTML = '<p>Nenhuma notificação.</p>';
    }
};

notificationIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    notificationDropdown.classList.toggle('visible');
});

// Função para fechar o dropdown de notificações
const closeNotificationDropdown = (e) => {
    if (!notificationDropdown.contains(e.target) && !notificationIcon.contains(e.target)) {
        notificationDropdown.classList.remove('visible');
    }
};

// Adiciona o evento de clique no documento
document.addEventListener('click', closeNotificationDropdown);
