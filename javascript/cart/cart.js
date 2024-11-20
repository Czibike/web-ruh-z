let cart = [
  {
    itemId: 2,
    imgSrc: "./images/fésű.jpg",
    name: "fésű",
    quantity: 1,
    price: 1500,
  },
  {
    itemId: 1,
    imgSrc: "./images/borotva.webp",
    name: "borotva",
    quantity: 1,
    price: 15000,
  },
  {
    itemId: 4,
    imgSrc: "./images/púder.jpg",
    name: "púder",
    quantity: 1,
    price: 2000,
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

const totalPrice = (price, quantity) => {
  return price * quantity;
};

const onLoads = () => {
  isEmpty();
  renderItems();
};

window.onload = onLoads();

const plusBtn = document.querySelectorAll(".plus");
const minusBtn = document.querySelectorAll(".minus");
const inputs = document.querySelectorAll(".input");

function renderItems() {
  itemContainer.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];

    itemContainer.innerHTML += `
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
            <input 
              type="number" 
              value="${item.quantity}" 
              class="input" 
              data-item-id=" ${item.itemId}" 
            />
            <div class="stepper-btns">
              <button type="button">
                <span 
                  class="material-symbols-outlined plus" 
                  data-item-id="${item.itemId}"
                >
                  keyboard_arrow_up
                </span>
              </button>
              <button type="button">
                <span 
                  class="material-symbols-outlined minus" 
                  data-item-id="${item.itemId}"
                >
                  keyboard_arrow_down
                </span>
              </button>
            </div>
          </div>
          <div class="delete-btn">
            <button type="button">
              <span 
                class="material-symbols-outlined delete" 
                data-item-id="${item.itemId}"
              > close </span>
            </button>
          </div>
        </div>
        <div class="unit-price center">
          <span class="js-unit-price">${item.price} Ft</span>
        </div>
        <div class="total-price center">
          <span class="js-total-price" data-item-id="${item.itemId}">
            ${totalPrice(item.price, item.quantity)} Ft
          </span>
        </div>
      </div>
    `;
  }

  const deleteBtn = document.querySelectorAll(".delete");
  for (const btn of deleteBtn) {
    btn.addEventListener("click", (e) => {
      let id = Number(e.target.attributes[1].value);
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

const quantityRender = (boolean, btnId) => {
  let total = document.querySelectorAll(".js-total-price");

  total.forEach((container) => {
    let num = Number(container.getAttribute("data-item-id"));
    if (num === btnId) {
      if (boolean) {
        cart.forEach((item) => {
          if (item.itemId === btnId) {
            item.quantity++;
            total.innerHTML = totalPrice(item.price, item.quantity) + " Ft";
            return;
          }
        });
      } else {
        cart.forEach((item) => {
          if (item.itemId === btnId) {
            item.quantity--;
            total.innerHTML = totalPrice(item.price, item.quantity) + " Ft";
            return;
          }
        });
      }
    }
  });
};

plusBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let btnId = Number(e.target.attributes[1].value);

    for (const input of inputs) {
      let inputId = Number(input.getAttribute("data-item-id").valueOf());

      if (inputId === btnId) {
        input.value++;
        quantityRender(true, btnId);
        break;
      }
    }
  });
});

minusBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let btnId = Number(e.target.attributes[1].value);

    for (const input of inputs) {
      let inputId = Number(input.getAttribute("data-item-id").valueOf());

      if (inputId === btnId) {
        input.value--;
        quantityRender(false, btnId);
        break;
      }
    }
  });
});
