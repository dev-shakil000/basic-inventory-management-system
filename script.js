// Get references to HTML elements
var productForm = document.getElementById('productForm');
var productNameInput = document.getElementById('productName');
var quantityInput = document.getElementById('quantity');
var priceInput = document.getElementById('price');
var errorMessage = document.getElementById('errorMessage');
var productTableBody = document.getElementById('productTableBody');
var products = [];
// Validate input fields
function validateForm() {
    var name = productNameInput.value.trim();
    var quantity = parseInt(quantityInput.value);
    var price = parseFloat(priceInput.value);
    if (!name) {
        errorMessage.textContent = 'Product Name is required.';
        return false;
    }
    if (isNaN(quantity) || quantity <= 0) {
        errorMessage.textContent = 'Quantity must be a positive number.';
        return false;
    }
    if (isNaN(price) || price <= 0) {
        errorMessage.textContent = 'Price must be a positive number.';
        return false;
    }
    errorMessage.textContent = ''; // Clear the error message
    return true;
}
// Add new product to the list
function addProduct(event) {
    event.preventDefault();
    if (!validateForm()) {
        return;
    }
    var newProduct = {
        name: productNameInput.value.trim(),
        quantity: parseInt(quantityInput.value),
        price: parseFloat(priceInput.value)
    };
    products.push(newProduct);
    renderProductTable();
    productForm.reset(); // Clear the form
}
// Render product table
function renderProductTable() {
    productTableBody.innerHTML = '';
    products.forEach(function (product) {
        var row = document.createElement('tr');
        var nameCell = document.createElement('td');
        nameCell.textContent = product.name;
        row.appendChild(nameCell);
        var quantityCell = document.createElement('td');
        quantityCell.textContent = product.quantity.toString();
        row.appendChild(quantityCell);
        var priceCell = document.createElement('td');
        priceCell.textContent = product.price.toFixed(2);
        row.appendChild(priceCell);
        productTableBody.appendChild(row);
    });
}
// Add event listener for form submission
productForm.addEventListener('submit', addProduct);
