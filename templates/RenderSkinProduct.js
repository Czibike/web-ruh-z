import products from "../javascript/products.js";

const skinContainer = document.querySelector(".skin-container");
let html = "";

window.onload = () => {
  for (const i of products.skin) {
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
  }
  skinContainer.innerHTML = html;
};
