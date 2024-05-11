import products from "./products.js";
const randomFromHair = document.querySelector(".randomFromHair");
const randomFromFace = document.querySelector(".randomFromFace");
const randomFromSkin = document.querySelector(".randomFromSkin");
const randomFromOther = document.querySelector(".randomFromOther");

let arr = [];

const randomNumbers = (max, min) => {
  for (let i = 0; i < 4; i++) {
    let x = Math.floor(Math.random() * max) + min;
    if (arr.includes(x) == true) {
      i -= 1;
    } else {
      if (x > max == false) {
        arr.push(x);
      }
    }
  }
  return arr;
};

function generateCards(container, array) {
  randomNumbers(array.length, 0);

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i].valueOf();

    let name = array[num].name;
    let price = array[num].price;
    let img = array[num].image;
    let template = "";
    template = `
        <div class="card">
          <img src="${img}" alt="" />
          <div class="textarea">
            <h4 class="product-name js-productName">${name}</h4>
            <h4 class="product-price">${price}</h4>
          </div>
          <div class="buttons">
            <button class="cart">
              <span>kosár</span>
              <img src="./images/icons/add_shopping_cart.png" alt="cart">
            </button>
            <button class="favorite">
              <img src="./images/icons/favorite.png" alt="favorite">
            </button>
          </div>
        </div>`;
    container.innerHTML += template;
  };
  arr = [];
}

function containerFiller() {
  generateCards(randomFromHair, products.hair);
  generateCards(randomFromFace, products.face);
  generateCards(randomFromSkin, products.skin);
  generateCards(randomFromOther, products.othrer);
}

window.onload = containerFiller();
