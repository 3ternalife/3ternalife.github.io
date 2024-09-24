// Shopping cart functionality

// Add to cart function
function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart!`);
}

// Display cart items on cart.html
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    cartItems.innerHTML = '';

    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}

// Clear cart
function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
}

// Automatically display the cart when on the cart page
if (window.location.pathname.includes('cart.html')) {
    displayCart();
}
