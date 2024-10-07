let cart = [
  {
    imgSrc: "./images/borotva.webp",
    name: "borotva",
    quantity: 1,
    priceN: 2000,
    priceT: 4000,
  },
];

const empty = document.querySelector(".cart-group-empty");
const emptyNot = document.querySelector(".cart-group");
const itemContainer = document.querySelector(".item-wrapper");
let itemTemplete = "";

if (cart.length === 0) {
  empty.classList.remove("none");
  emptyNot.classList.add("none");
} else {
  empty.classList.add("none");
  emptyNot.classList.remove("none");
}

cart.forEach((item) => {
  itemTemplete += `
    <div class="item">
      <div class="item-img center">
        <img src="${item.imgSrc}" alt="cart-item" />
      </div>
      <div class="item-name center">
        <a href="#" class="js-link">
          <h3>${item.name}</h3>
        </a>
        <br>
        <span>Kapott hűségpontok: 10</span>
      </div>
      <div class="quantity">
        <div class="stepper">
          <input type="number" value="${item.quantity}" />
          <div class="stepper-btns">
            <button type="button">
              <span class="material-symbols-outlined">
                keyboard_arrow_up
              </span>
            </button>
            <button type="button">
              <span class="material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </button>
          </div>
        </div>
        <div class="delete-btn">
          <button type="button">
            <span class="material-symbols-outlined"> close </span>
          </button>
        </div>
      </div>
      <div class="unit-price center">
        <span class="js-unit-price">${item.priceN} Ft</span>
      </div>
      <div class="total-price center">
        <span class="js-total-price">${item.priceT} Ft</span>
      </div>
    </div>
  `;
  itemContainer.innerHTML = itemTemplete
});
