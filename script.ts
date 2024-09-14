// Get references to HTML elements
const productForm = document.getElementById('productForm') as HTMLFormElement;
const productNameInput = document.getElementById('productName') as HTMLInputElement;
const quantityInput = document.getElementById('quantity') as HTMLInputElement;
const priceInput = document.getElementById('price') as HTMLInputElement;
const errorMessage = document.getElementById('errorMessage') as HTMLElement;
const productTableBody = document.getElementById('productTableBody') as HTMLElement;

// Product array to hold the products
interface Product {
  name: string;
  quantity: number;
  price: number;
}

let products: Product[] = [];

// Validate input fields
function validateForm(): boolean {
  const name = productNameInput.value.trim();
  const quantity = parseInt(quantityInput.value);
  const price = parseFloat(priceInput.value);

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

  errorMessage.textContent = '';  // Clear the error message
  return true;
}

// Add new product to the list
function addProduct(event: Event) {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  const newProduct: Product = {
    name: productNameInput.value.trim(),
    quantity: parseInt(quantityInput.value),
    price: parseFloat(priceInput.value)
  };

  products.push(newProduct);
  renderProductTable();
  productForm.reset();  // Clear the form
}

// Render product table
function renderProductTable() {
  productTableBody.innerHTML = '';

  products.forEach((product) => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = product.name;
    row.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = product.quantity.toString();
    row.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = product.price.toFixed(2);
    row.appendChild(priceCell);

    productTableBody.appendChild(row);
  });
}

// Add event listener for form submission
productForm.addEventListener('submit', addProduct);
