// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Grab cart elements
const cartBtn = document.querySelector(".cart-btn");
const cartCount = document.getElementById("cart-count");

// Create cart sidebar
const cartSidebar = document.createElement("div");
cartSidebar.id = "cart-sidebar";
document.body.appendChild(cartSidebar);

// Open sidebar
cartBtn.addEventListener("click", () => {
  cartSidebar.style.display = "block";
  setTimeout(() => (cartSidebar.style.transform = "translateX(0)"), 10);
  renderCart();
});

// Close sidebar
function closeCart() {
  cartSidebar.style.transform = "translateX(100%)";
  setTimeout(() => (cartSidebar.style.display = "none"), 300);
}

// Add to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const cartItem = cart.find(item => item.id === id);

  if (cartItem) {
    if (cartItem.quantity >= 5) {
      showToast("You can’t add more than 5 of this item");
      return;
    }
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartCount();
  renderCart();
  showToast(`${product.name} added to cart`);
}

// Remove from cart
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartCount();
  renderCart();
}

// Update quantity
function updateQuantity(id, quantity) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  if (quantity > 5) {
    showToast("You can’t add more than 5 of this item");
    return;
  }
  item.quantity = quantity;
  if (item.quantity <= 0) removeFromCart(id);
  else { saveCart(); updateCartCount(); renderCart(); }
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Update cart count badge
function updateCartCount() {
  const total = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  cartCount.textContent = total;
}

// Render cart sidebar
function renderCart() {
  cartSidebar.innerHTML = "";

  // Close button
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "✕";
  closeBtn.className = "close-btn";
  closeBtn.addEventListener("click", closeCart);
  cartSidebar.appendChild(closeBtn);

  if (cart.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "Your cart is empty";
    empty.className = "empty";
    cartSidebar.appendChild(empty);
    return;
  }

  const title = document.createElement("h2");
  title.textContent = "Your Cart";
  cartSidebar.appendChild(title);

  // Render each cart item
  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>₦${item.price.toLocaleString()}</p>
        <div>
          <button class="decrease" data-id="${item.id}">-</button>
          <span>${item.quantity}</span>
          <button class="increase" data-id="${item.id}">+</button>
          <button class="remove" data-id="${item.id}">Remove</button>
        </div>
      </div>
    `;
    cartSidebar.appendChild(div);
  });

  // Click events
  cartSidebar.querySelectorAll(".increase").forEach(btn => btn.addEventListener("click", () => {
    const id = btn.dataset.id;
    const item = cart.find(i => i.id === id);
    if (!item) return;
    if (item.quantity >= 5) { showToast("You can’t add more than 5 of this item"); return; }
    updateQuantity(id, item.quantity + 1);
  }));

  cartSidebar.querySelectorAll(".decrease").forEach(btn => btn.addEventListener("click", () => {
    const id = btn.dataset.id;
    const item = cart.find(i => i.id === id);
    if (!item) return;
    updateQuantity(id, item.quantity - 1);
  }));

  cartSidebar.querySelectorAll(".remove").forEach(btn => btn.addEventListener("click", () => {
    removeFromCart(btn.dataset.id);
  }));

  // Subtotal
  const subtotal = cart.reduce((sum, item) => sum + item.price * (item.quantity || 0), 0);
  const subtotalDiv = document.createElement("div");
  subtotalDiv.className = "subtotal";
  subtotalDiv.innerHTML = `<span>Subtotal:</span> ₦<span id="cart-subtotal">${subtotal.toLocaleString()}</span>`;
  cartSidebar.appendChild(subtotalDiv);

  // Paystack Checkout button
  const checkoutBtn = document.createElement("button");
  checkoutBtn.className = "checkout-btn";
  checkoutBtn.id = "pay-now-btn";
  checkoutBtn.textContent = "Pay Now";
  cartSidebar.appendChild(checkoutBtn);
}

// Initialize cart count
updateCartCount();

// --- Paystack handler ---
document.addEventListener("click", function(e) {
  if (e.target && e.target.id === "pay-now-btn") {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    let subtotal = cart.reduce((sum, item) => sum + item.price * (item.quantity || 0), 0);
    let paystackAmount = subtotal * 100; // Convert Naira to Kobo

    // Get user email (assume stored in localStorage)
    const userEmail = localStorage.getItem("userEmail") || "customer@example.com";

    let handler = PaystackPop.setup({
      key: "pk_test_5f82207c97e219ddc1e30614129d203ed7c9c622", // replace with your Paystack public key
      email: userEmail,
      amount: paystackAmount,
      currency: "NGN",
      ref: "CX_" + Math.floor(Math.random() * 1000000000 + 1),
      callback: function(response){
        alert("Payment successful! Reference: " + response.reference);
        // Clear cart after successful payment
        cart = [];
        saveCart();
        updateCartCount();
        renderCart();
      },
      onClose: function(){
        alert("Payment window closed.");
      }
    });
    handler.openIframe();
  }
});