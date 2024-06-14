import { renderProducts, addProduct, editProduct, deleteProduct } from './product.js';
import { checkExpiryDates } from './notification.js';
import { isAuthenticated, logout } from './auth.js';
import './report.js';

if (!isAuthenticated()) {
    window.location.href = 'login.html';
}

let isEditing = false;
let editIndex = null;

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    const productForm = document.getElementById('product-form');
    const submitButton = productForm.querySelector('button[type="submit"]');

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
        if (isValidProduct(newProduct)) {
            if (isEditing) {
                showConfirmationModal('Você tem certeza que deseja salvar as alterações?', () => {
                    updateProduct(newProduct);
                    isEditing = false;
                    editIndex = null;
                    submitButton.textContent = 'Adicionar Produto';
                    productForm.reset();
                });
            } else {
                addProduct(newProduct);
                productForm.reset();
            }
        } else {
            showModal('modal', 'Não é possível adicionar itens com data de validade já passada.');
        }
    });

    window.editProduct = (index) => {
        loadProductToForm(index);
        isEditing = true;
        editIndex = index;
        submitButton.textContent = 'Salvar Alterações';
    };

    window.deleteProduct = (index) => {
        showConfirmationModal('Você tem certeza que deseja deletar este item?', () => {
            deleteProduct(index);
        });
    };

    // Modal
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Modal de Confirmação
    const confirmModal = document.getElementById('confirm-modal');
    const confirmMessage = document.getElementById('confirm-message');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmNo = document.getElementById('confirm-no');

    confirmYes.addEventListener('click', () => {
        if (confirmCallback) confirmCallback();
        confirmModal.style.display = 'none';
    });

    confirmNo.addEventListener('click', () => {
        confirmModal.style.display = 'none';
    });

    let confirmCallback = null;

    const showConfirmationModal = (message, callback) => {
        confirmCallback = callback;
        confirmMessage.textContent = message;
        confirmModal.style.display = 'flex';
    };
});

const isValidProduct = (product) => {
    const today = new Date().toISOString().split('T')[0];
    return product.expiry >= today;
};

const showModal = (modalId, message) => {
    const modal = document.getElementById(modalId);
    const modalMessage = modal.querySelector('p');
    modalMessage.textContent = message;
    modal.style.display = 'flex';
};

const loadProductToForm = (index) => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const product = products[index];
    document.getElementById('name').value = product.name;
    document.getElementById('category').value = product.category;
    document.getElementById('expiry').value = product.expiry;
    document.getElementById('quantity').value = product.quantity;
    document.getElementById('batch').value = product.batch;
    document.getElementById('supplier').value = product.supplier;
};

const updateProduct = (updatedProduct) => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products[editIndex] = updatedProduct;
    localStorage.setItem('products', JSON.stringify(products));
    renderProducts();
};
