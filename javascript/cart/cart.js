let cart = [
  {
    itemId: 2,
    imgSrc: "./images/fésű.jpg",
    name: "fésű",
    quantity: 1,
    priceN: 2000,
    priceT: 4000,
  },
  {
    itemId: 1,
    imgSrc: "./images/borotva.webp",
    name: "borotva",
    quantity: 1,
    priceN: 2000,
    priceT: 4000,
  },
  {
    itemId: 4,
    imgSrc: "./images/púder.jpg",
    name: "púder",
    quantity: 1,
    priceN: 2000,
    priceT: 4000,
  },
];

const empty = document.querySelector(".cart-group-empty");
const emptyNot = document.querySelector(".cart-group");
const itemContainer = document.querySelector(".item-wrapper");

const isEmpty = () => {
  if (cart.length === 0) {
    empty.classList.remove("none");
    emptyNot.classList.add("none");
  } else {
    empty.classList.add("none");
    emptyNot.classList.remove("none");
  }
};

const onLoads = () => {
  isEmpty();
  renderItems();
};

window.onload = onLoads();

const plusBtn = document.querySelectorAll(".plus");
const minusBtn = document.querySelectorAll(".minus");
let itemTemplete = "";

function renderItems() {
  let itemTemplete = "";
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];

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
            <input type="number" value="${item.quantity}"  data-item-id=" ${item.itemId}" />
            <div class="stepper-btns">
              <button type="button" class="plus" data-item-id="${item.itemId}">
                <span class="material-symbols-outlined">
                  keyboard_arrow_up
                </span>
              </button>
              <button type="button" class="minus" data-item-id="${item.itemId}">
                <span class="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </button>
            </div>
          </div>
          <div class="delete-btn">
            <button type="button" class="delete" data-item-id="${item.itemId}">
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
  }

  itemContainer.innerHTML = itemTemplete;

  const deleteBtn = document.querySelectorAll(".delete");

  for (const btn of deleteBtn) {
    btn.addEventListener("click", (e) => {
      let id = Number(e.target.attributes[2].value);
      let foundId;

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].itemId === id) {
          foundId = i;
          break;
        }
      }

      cart.splice(foundId, 1);
      renderItems();
      isEmpty();
    });
  }
}
