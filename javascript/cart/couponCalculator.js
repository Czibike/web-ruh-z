const inputCoupon = document.getElementById("input-coupon");
const btnCoupon = document.getElementById("activate-coupon");
const couponInput = document.querySelector(".couponJs");
const warningCouponSection = document.querySelector(".js-coupon-warning");

const couponObj = {
  BOGY25: 25,
  BOGY30: 30,
  START40: 40,
};

const warningCouponRender = () => {
  warningCouponSection.style.display = "flex";
  warningCouponSection.innerHTML = `
    <p>Érvénytelen kupon kód!</p>
    <button type="button" class="warning-remove">x</button>`;

  const remove = document.querySelector(".warning-remove");
  remove.addEventListener("click", () => {
    warningCouponSection.style.display = "none";
  });
};

const couponRender = (key, value) => {
  couponInput.innerHTML = `
    <td class="text">
      <strong>${key}</strong>
    </td>
    <td class="price">
      <strong class="coupon-percent" data-value="${value}"></strong>
    </td>`;

  calculator();
};

btnCoupon.addEventListener("click", () => {
  let inputValue = inputCoupon.value;

  for (const key in couponObj) {
    if (key == inputValue) {
      couponRender(key, couponObj[key]);
      return;
    }
  }

  warningCouponRender();
});
