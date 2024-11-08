const modalOpener = document.getElementById("openModal");
const modalCloser = document.getElementById("closeModal");
const modalCloserWData = document.getElementById("closeModalWData");
const warningModalSection = document.querySelector(".js-modal-warning");
const radios = document.querySelectorAll(".radio-input");
const modal = document.getElementById("modal");
const deliverInput = document.querySelector(".deliverJs");
let delivererArr = [];

const setDeliver = (arr) => {
  deliverInput.innerHTML = `
      <td class="text">
        <strong>${arr[0]}</strong>
      </td>
      <td class="price">
        <strong class="deliver-price" data-value="${arr[1]}">${arr[1]}</strong>
      </td>
    `;

  modal.close();
  calculator();
};

const warningModalRender = () => {
  warningModalSection.style.display = "flex";
  warningModalSection.innerHTML = `
    <p>Kötelező választani egyet!</p>
    <button type="button" class="warning-remove">x</button>`;

  const remove = document.querySelector(".warning-remove");
  remove.addEventListener("click", () => {
    warningModalSection.style.display = "none";
  });
};

const delivererValidate = (data) => {
  if (data != "") {
    let arr = data.split("@");
    return setDeliver(arr);
  } else {
    return warningModalRender();
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

  delivererValidate(e.target.value);
});
