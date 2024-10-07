let cart = [1];

const empty = document.querySelector(".cart-group-empty");
const emptyNot = document.querySelector(".cart-group");

if (cart.length === 0) {
  empty.classList.remove("none");
  emptyNot.classList.add("none");
} else {
  empty.classList.add("none");
  emptyNot.classList.remove("none");
}
