import { isAuthenticated } from './auth.js';

if (!isAuthenticated()) {
    window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const generateReportButton = document.getElementById('generate-report');
    const reportOutput = document.getElementById('report-output');
    const daysFilter = document.getElementById('days-filter');

    generateReportButton.addEventListener('click', () => {
        const days = parseInt(daysFilter.value, 10);
        generateReport(days);
    });

    const generateReport = (days) => {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        const today = new Date().toISOString().split('T')[0];
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + days);

        const reportData = products.filter(product => {
            const expiryDate = new Date(product.expiry);
            return expiryDate <= futureDate && expiryDate >= new Date(today);
        });

        reportOutput.innerHTML = '';

        if (reportData.length > 0) {
            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');

            const headers = ['Nome do Produto', 'Data de Validade'];
            const headerRow = document.createElement('tr');
            headers.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);

            reportData.forEach(product => {
                const row = document.createElement('tr');
                const nameCell = document.createElement('td');
                nameCell.textContent = product.name;
                const expiryCell = document.createElement('td');
                expiryCell.textContent = product.expiry;
                row.appendChild(nameCell);
                row.appendChild(expiryCell);
                tbody.appendChild(row);
            });

            table.appendChild(thead);
            table.appendChild(tbody);
            reportOutput.appendChild(table);
        } else {
            reportOutput.textContent = 'Nenhum produto próximo da validade nos próximos ' + days + ' dias.';
        }
    };
});
