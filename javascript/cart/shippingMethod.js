const modalOpener = document.getElementById("openModal");
const modalCloser = document.getElementById("closeModal");
const modalCloserWData = document.getElementById("closeModalWData");
const radios = document.querySelectorAll(".radio-input");
const modal = document.getElementById("modal");
const deliverInput = document.querySelector(".deliverJs");
let delivererArr = [];

const setDeliver = () => {
  if (delivererArr.length != 0) {
    deliverInput.innerHTML = `
      <td class="text">
        <strong>${delivererArr[0]}</strong>
      </td>
      <td class="price">
        <strong>${delivererArr[1]}Ft</strong>
      </td>
    `;
  }
};

modalOpener.addEventListener("click", () => {
  modal.showModal();
});

modalCloser.addEventListener("click", () => {
  modal.close();
});

modalCloserWData.addEventListener("click", (e) => {
  e.preventDefault();

  radios.forEach((radio) => {
    if (radio.checked) {
      let value = radio.value.valueOf();
      modalCloserWData.setAttribute("value", `${value}`);
    }
  });

  let deliverer = e.target.value;
  delivererArr = deliverer.split("@");
  setDeliver();
  modal.close();
});
