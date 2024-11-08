const nettoPrice = Number(document.querySelector(".netto-price").innerText);
const taxPrice = document.querySelector(".tax-price");
const tax = 27;

const isNotNull = (element) => {
  if (element != null) {
    let data = Number(element.getAttribute("data-value"));
    return data;
  } else return false;
};

const taxCalculator = (total) => {
  let taxMultiplier = Number(`1.${tax}`);

  let totalR = total * taxMultiplier;
  let HTMLTemplete = totalR - total;

  taxPrice.innerText = HTMLTemplete;
  return totalR;
};

const couponCalculator = (netto, percent, total) => {
  const couponPrice = document.querySelector(".coupon-percent");

  let szl = percent / 100;
  let t = szl * netto;
  total -= t;

  couponPrice.innerText = t;

  return total;
};

const calculator = () => {
  let totalTemplete = nettoPrice;

  totalTemplete = taxCalculator(totalTemplete);

  const couponPercent = document.querySelector(".coupon-percent");
  let percent = isNotNull(couponPercent);

  if (percent != false) {
    totalTemplete = couponCalculator(nettoPrice, percent, totalTemplete);
  }

  const deliverPrice = document.querySelector(".deliver-price");
  let validDeliverPrice = isNotNull(deliverPrice);

  if (validDeliverPrice != false) {
    totalTemplete += validDeliverPrice;
  }

  const totalPrice = document.querySelector(".total-price-end");
  totalPrice.innerText = totalTemplete;
  console.log("success");
};

calculator();
