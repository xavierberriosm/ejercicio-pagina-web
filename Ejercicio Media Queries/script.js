// Toggle Sidebar en móviles
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
});

// Cambiar estado de menú items
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

// Efecto hover en cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Simular actualización de datos
setInterval(() => {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(num => {
        const currentValue = parseInt(num.textContent.replace(/[^0-9]/g, ''));
        const newValue = currentValue + Math.floor(Math.random() * 10);
        num.textContent = newValue.toLocaleString();
    });
}, 5000);