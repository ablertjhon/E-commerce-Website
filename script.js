// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
];

document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');
    const cartBtn = document.getElementById('cart-btn');
    const cart = document.getElementById('cart');
    const cartItems = document.getElementById('cart-items');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Function to display products
    function displayProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;
            productList.appendChild(productDiv);
        });
    }

    // Function to add item to cart
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${product.name} - $${product.price}`;
            cartItems.appendChild(cartItem);
        }
    }

    // Event listener for add to cart button
    productList.addEventListener('click', function (e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
    });

    // Event listener for cart button
    cartBtn.addEventListener('click', function () {
        cart.style.display = 'block';
    });

    // Event listener for checkout button
    checkoutBtn.addEventListener('click', function () {
        alert('Checkout process will be implemented in the backend.');
    });

    // Display initial product listings
    displayProducts();
});
