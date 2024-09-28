const bookingBodies = document.querySelectorAll("[data-booking-body]");
const steps = document.querySelectorAll(".list-item");
const buttons = document.querySelectorAll(".forward");
const treatmentBtns = document.querySelectorAll(".js-treatment");
const dateBtns = document.querySelectorAll(".date");
const firstNameInput = document.getElementById("firstname");
const surNameInput = document.getElementById("surname");
const emailInput = document.getElementById("e-mail");
const telInput = document.getElementById("phonenumber");
const submitBtn = document.getElementById("submit");

let treatmentData = "";
let dateData = "";
let timeData = "";
let firstnameData = "";
let surnameData = "";
let emailData = "";
let telData = "";

const spanTreatment = document.getElementById("js-span-treatment");
const spanDate = document.getElementById("js-span-date");

treatmentBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    treatmentData = btn.getAttribute("data-treatment").valueOf();
    bookingBodies[0].classList.add("none");
    bookingBodies[1].classList.remove("none");
    bookingSteps();
  });
});

dateBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let cYear = btn.getAttribute("data-current-year");
    let cMonth = btn.getAttribute("data-current-month");
    let cDay = btn.getAttribute("data-current-day");

    dateData = `${cYear}-${cMonth}-${cDay}`;

    const timeBtns = document.querySelectorAll(".time-available");
    timeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        timeData = btn.getAttribute("data-time").valueOf();
        bookingBodies[1].classList.add("none");
        bookingBodies[2].classList.remove("none");
        bookingSteps();
      });
    });
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    firstnameData = firstNameInput.value;
    surnameData = surNameInput.value;
    emailData = emailInput.value;
    telData = telInput.value;

    bookingBodies[2].classList.add("none");
    bookingBodies[3].classList.remove("none");

    bookingSteps();
    finalstep();
  });
});

const bookingSteps = () => {
  for (let i = 0; i < bookingBodies.length; i++) {
    if (!bookingBodies[i].classList.contains("none")) {
      steps[i].classList.add("active");
    }
    if (bookingBodies[i].classList.contains("none")) {
      steps[i].classList.remove("active");
    }
  }
};

const finalstep = () => {
  if (!bookingBodies[3].classList.contains("none")) {
    spanTreatment.innerText = treatmentData;
    spanDate.innerText = `${dateData} ${timeData}`;
  }
};

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const body = {
    treatment: treatmentData,
    date: dateData,
    time: timeData,
    firstname: firstnameData,
    surname: surnameData,
    email: emailData,
    tel: telData,
  };

  fetch("/treatmentOrder", {
    method: "post",
    body: body,
    headers: {
      "content-type": "application/json",
    },
  });
});
