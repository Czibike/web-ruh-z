const modalOpener = document.getElementById("openModal");
const modalCloser = document.getElementById("closeModal");
const modalCloserWData = document.getElementById("closeModalWData");
const warningSection = document.querySelector(".js-warning");
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
        <strong>${arr[1]}Ft</strong>
      </td>
    `;
  modal.close();
};

const warningRender = () => {
  warningSection.style.display = "flex";
  warningSection.innerHTML = `
    <p>Kötelező választani egyet!</p>
    <button type="button" class="warning-remove">x</button>`;

  const remove = document.querySelector(".warning-remove");
  remove.addEventListener("click", () => {
    warningSection.style.display = "none";
  });
};

const delivererValidate = (data) => {
  if (data != "") {
    let arr = data.split("@");
    return setDeliver(arr);
  } else {
    return warningRender();
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
