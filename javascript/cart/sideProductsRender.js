const recentlyViewedArr = [
  {
    name: "Acryl gel",
    price: 1499,
    rating: 5,
    img: "./images/acryl gel.webp",
    href: "product/acryl-gel",
  },
  {
    name: "borotva",
    price: 1499,
    rating: 5,
    img: "./images/borotva.webp",
    href: "product/borotva",
  },
  {
    name: "fésű",
    price: 1499,
    rating: 5,
    img: "./images/fésű.jpg",
    href: "product/fesu",
  },
  {
    name: "Acryl gel",
    price: 1499,
    rating: 5,
    img: "./images/acryl gel.webp",
    href: "product/acryl-gel",
  },
];
const mostViewedArr = [
  {
    name: "Acryl gel",
    price: 1499,
    rating: 3,
    img: "./images/acryl gel.webp",
    href: "product/acryl-gel",
  },
  {
    name: "borotva",
    price: 1499,
    rating: 3,
    img: "./images/borotva.webp",
    href: "product/borotva",
  },
  {
    name: "fésű",
    price: 1499,
    rating: 3,
    img: "./images/fésű.jpg",
    href: "product/fesu",
  },
  {
    name: "fésű",
    price: 1499,
    rating: 3,
    img: "./images/fésű.jpg",
    href: "product/fesu",
  },
];
const bestsellersArr = [
  {
    name: "Acryl gel",
    price: 1499,
    rating: 1,
    img: "./images/acryl gel.webp",
    href: "product/acryl-gel",
  },
  {
    name: "borotva",
    price: 1499,
    rating: 1,
    img: "./images/borotva.webp",
    href: "product/borotva",
  },
  {
    name: "fésű",
    price: 1499,
    rating: 1,
    img: "./images/fésű.jpg",
    href: "product/fesu",
  },
  {
    name: "borotva",
    price: 1499,
    rating: 1,
    img: "./images/borotva.webp",
    href: "product/borotva",
  },
];
const recentlyViewedContainer = document.querySelector(".recently-viewed");
const mostViewedContainer = document.querySelector(".most-viewed");
const bestsellersContainer = document.querySelector(".bestsellers");
const recentlyViewedBtn = document.querySelector(".recently-viewed-btn");
const mostViewedBtn = document.querySelector(".most-viewed-btn");
const bestsellersBtn = document.querySelector(".bestsellers-btn");

let yellowStar = `
<span class="star">
  <img src="./images/icons/star_24px_y.svg" />
</span>
`;

let blackStar = `
<span class="star">
  <img src="./images/icons/star_24px.svg" />
</span>
`;

const sideProductRender = (arr, container) => {
  arr.forEach((obj) => {
    let templete = "";

    if (obj.rating === 5) {
      for (let i = 0; i < 5; i++) {
        templete += yellowStar;
      }
    } else if (obj.rating >= 2 || obj.rating <= 4) {
      for (let i = 0; i < obj.rating; i++) {
        templete += yellowStar;
      }
      for (let i = 0; i < 5 - obj.rating; i++) {
        templete += blackStar;
      }
    } else {
      templete += yellowStar;
      for (let i = 0; i < 4; i++) {
        templete += blackStar;
      }
    }

    container.innerHTML += `
      <div class="card side-product">
      <div class="image">
        <a href="${obj.href}">
          <img src="${obj.img}" alt="" />
        </a>
      </div>
      <div class="caption">
        <div class="name">
          <a href="${obj.href}">${obj.name}</a>
        </div>
        <div class="price">
          <span class="price-normal">${obj.price}Ft</span>
        </div>
        <div class="rating">
          <div class="rating-stars">
            ${templete}
          </div>
        </div>
        <div class="btn-group">
          <a href="" class="btn btn-cart">
            <img src="./images/icons/cart_20px.svg" />
          </a>
          <a href="" class="btn btn-wishlist">
            <img src="./images/icons/favorite.svg" />
          </a>
          <a href="" class="btn btn-compare">
            <img src="./images/icons/compare.svg" />
          </a>
        </div>
      </div>
    </div>`;
  });
};

recentlyViewedBtn.addEventListener("click", (e) => {
  e.preventDefault();
  recentlyViewedContainer.classList.remove("none");
  mostViewedContainer.classList.add("none");
  bestsellersContainer.classList.add("none");

  if (recentlyViewedContainer.innerHTML === "") {
    sideProductRender(recentlyViewedArr, recentlyViewedContainer);
  } else return;
});

mostViewedBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mostViewedContainer.classList.remove("none");
  recentlyViewedContainer.classList.add("none");
  bestsellersContainer.classList.add("none");

  if (mostViewedContainer.innerHTML === "") {
    sideProductRender(mostViewedArr, mostViewedContainer);
  } else return;
});

bestsellersBtn.addEventListener("click", (e) => {
  e.preventDefault();
  bestsellersContainer.classList.remove("none");
  recentlyViewedContainer.classList.add("none");
  mostViewedContainer.classList.add("none");

  if (bestsellersContainer.innerHTML === "") {
    sideProductRender(bestsellersArr, bestsellersContainer);
  } else return;
});

sideProductRender(recentlyViewedArr, recentlyViewedContainer);
