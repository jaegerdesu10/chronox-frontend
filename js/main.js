// Grab container elements
const grid = document.getElementById('products-grid');
const count = document.getElementById('product-count');

// Update product count
count.textContent = `${products.length} products`;

// Render each product
products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <a href="product.html?id=${product.id}" class="product-link">
      <div class="image-container">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info">
        <p class="category">${product.category}</p>
        <h3 class="name">${product.name}</h3>
        <p class="price">₦${product.price.toLocaleString()}</p>
      </div>
    </a>
  `;
  grid.appendChild(card);
});

// Toast function
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => document.body.removeChild(toast), 300);
  }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('show');
    });
  }
});




