import { loadProducts } from './storage.js';

const reportOutput = document.getElementById('report-output');
const generateReportButton = document.getElementById('generate-report');

const generateReport = () => {
    const products = loadProducts();
    let report = '<h3>Relatório de Produtos Próximos da Validade</h3><ul>';
    const today = new Date().toISOString().split('T')[0];
    products.forEach(product => {
        const daysToExpiry = Math.ceil((new Date(product.expiry) - new Date(today)) / (1000 * 60 * 60 * 24));
        if (daysToExpiry <= 7) {
            report += `<li>${product.name} - Validade: ${product.expiry}</li>`;
        }
    });
    report += '</ul>';
    reportOutput.innerHTML = report;
};

generateReportButton.addEventListener('click', generateReport);
