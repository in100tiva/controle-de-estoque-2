import { loadProducts, saveProducts } from './storage.js';
import { checkExpiryDates } from './notification.js';

const productTableBody = document.getElementById('product-table-body');

export const renderProducts = () => {
    const products = loadProducts();
    productTableBody.innerHTML = '';
    products.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>${product.expiry}</td>
            <td>${product.quantity}</td>
            <td>${product.batch}</td>
            <td>${product.supplier}</td>
            <td>
                <button class="icon-button" onclick="editProduct(${index})">
                    <i class="ph ph-pencil"></i>
                </button>
                <button class="icon-button" onclick="deleteProduct(${index})">
                    <i class="ph ph-trash"></i>
                </button>
            </td>
        `;
        productTableBody.appendChild(row);
    });
    checkExpiryDates(products);
};

export const addProduct = (newProduct) => {
    const products = loadProducts();
    products.push(newProduct);
    saveProducts(products);
    renderProducts();
};

export const editProduct = (index) => {
    const products = loadProducts();
    const product = products[index];
    document.getElementById('name').value = product.name;
    document.getElementById('category').value = product.category;
    document.getElementById('expiry').value = product.expiry;
    document.getElementById('quantity').value = product.quantity;
    document.getElementById('batch').value = product.batch;
    document.getElementById('supplier').value = product.supplier;
    products.splice(index, 1);
    saveProducts(products);
};

export const deleteProduct = (index) => {
    const products = loadProducts();
    products.splice(index, 1);
    saveProducts(products);
    renderProducts();
};
