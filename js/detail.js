// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const productDetailContainer = document.getElementById('product-detail');

const product = products.find(p => p.id === id);

if (!product) {
  productDetailContainer.innerHTML = `
    <div class="product-not-found">
      <h1>Product not found</h1>
      <a href="index.html" class="back-to-shop">Return to shop</a>
    </div>
  `;
} else {
  productDetailContainer.innerHTML = `
    <a href="home.html" class="back-to-shop">← Back to shop</a>
    <div class="product-detail-wrapper">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <div class="product-info">
        <p class="category">${product.category}</p>
        <h1 class="product-name">${product.name}</h1>
        <p class="price">₦${product.price.toLocaleString()}</p>
        <p class="description">${product.description}</p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>

        <div class="product-details">
          <h3>Details</h3>
          <ul>
            ${product.details.map(d => `
              <li><span class="checkmark">✔</span>${d}</li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;

  // Add to cart button click functionality
  const addBtn = document.querySelector('.add-to-cart');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const cartItem = cart.find(item => item.id === product.id);
      if (cartItem && cartItem.quantity >= 5) {
        showToast("You can't add more than 5 of this item.");
        return;
      }

      addToCart(product.id);
      showToast(`${product.name} added to cart!`);
    });
  }
}
