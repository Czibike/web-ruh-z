import products from "./products.js";

const hairContainer = document.querySelector(".hair-container");
const skinContainer = document.querySelector(".hair-container");
const faceContainer = document.querySelector(".hair-container");
const otherContainer = document.querySelector(".hair-container");
let html = "";

for (const i of products.hair) {
  html += `
      <div class="card">
        <img src=".${i.image}" alt="" />
        <div class="textarea">
          <h4 class="product-name js-productName">${i.name}</h4>
          <h4 class="product-price">${i.price}</h4>
        </div>
        <div class="buttons">
          <button class="cart">
            <span>kosár</span>
            <img src="../images/icons/add_shopping_cart.png" alt="cart" />
          </button>
          <button class="favorite">
            <img src="../images/icons/favorite.png" alt="favorite" />
          </button>
        </div>
      </div>`;
  hairContainer.innerHTML = html;
}

function renderProducts() {
  
}

window.onload = renderProducts();
