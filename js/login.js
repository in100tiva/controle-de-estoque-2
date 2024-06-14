document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'luan' && password === '123456') {
            localStorage.setItem('authenticated', 'true');
            window.location.href = 'index.html';
        } else {
            const errorElement = document.getElementById('login-error');
            errorElement.textContent = 'Usuário ou senha incorretos.';
        }
    });
});
