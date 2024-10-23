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
    rating: 3,
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
];
const mostViewedArr = [
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
    rating: 3,
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
];
const bestsellersArr = [
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
    rating: 3,
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
];
const recentlyViewedContainer = document.querySelector(".recently-viewed");
const mostViewedContainer = document.querySelector(".most-viewed");
const bestsellersContainer = document.querySelector(".bestsellers");

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

recentlyViewedArr.forEach((obj) => {
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

  recentlyViewedContainer.innerHTML += `
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

mostViewedArr.forEach((obj) => {
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

  mostViewedContainer.innerHTML += `
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

bestsellersArr.forEach((obj) => {
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
  
    bestsellersContainer.innerHTML += `
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