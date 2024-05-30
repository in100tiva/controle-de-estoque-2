import { renderProducts, addProduct, editProduct, deleteProduct } from './product.js';
import { checkExpiryDates } from './notification.js';
import './report.js';

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    const productForm = document.getElementById('product-form');
    
    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newProduct = {
            name: document.getElementById('name').value,
            category: document.getElementById('category').value,
            expiry: document.getElementById('expiry').value,
            quantity: document.getElementById('quantity').value,
            batch: document.getElementById('batch').value,
            supplier: document.getElementById('supplier').value
        };
        addProduct(newProduct);
        productForm.reset();
    });

    window.editProduct = editProduct;
    window.deleteProduct = deleteProduct;
});
