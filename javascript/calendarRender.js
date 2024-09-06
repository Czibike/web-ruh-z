let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".dates");
const currdate = document.querySelector(".current-date");
const prenexIcons = document.querySelectorAll(".btn");

const months = [
  "Január",
  "Február",
  "Március",
  "Április",
  "Május",
  "Június",
  "Július",
  "Augusztus",
  "Szeptember",
  "Október",
  "November",
  "December",
];

// Function to generate the calendar
const manipulate = () => {
  let dayone = new Date(year, month, 1).getDay();
  let lastdate = new Date(year, month + 1, 0).getDate();

  // Get the day of the last date of the month
  let dayend = new Date(year, month, lastdate).getDay();

  // Get the last date of the previous month
  let monthlastdate = new Date(year, month, 0).getDate();

  console.log(dayone, lastdate, dayend, monthlastdate);

  let lit = "";

  // Loop to add the last dates of the previous month
  for (let i = dayone; i > 0; i--) {
    lit += `<li class="date inactive">${monthlastdate - i + 1}</li>`;
  }

  // Loop to add the dates of the current month
  for (let i = 1; i <= lastdate; i++) {
    let isToday =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "active"
        : "";
    lit += `<li class="date ${isToday}">${i}</li>`;
  }

  // Loop to add the first dates of the next month
  for (let i = dayend; i < 6; i++) {
    lit += `<li class="date inactive">${i - dayend + 1}</li>`;
  }

  currdate.innerText = `${months[month]} ${year}`;
  day.innerHTML = lit;
};

manipulate();

prenexIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // Check if the icon is "calendar-prev"
    // or "calendar-next"
    month = icon.id === "prev" ? month - 1 : month + 1;

    // Check if the month is out of range
    if (month < 0 || month > 11) {
      // Set the date to the first day of the
      // month with the new year
      date = new Date(year, month, new Date().getDate());

      // Set the year to the new year
      year = date.getFullYear();

      // Set the month to the new month
      month = date.getMonth();
    } else {
      // Set the date to the current date
      date = new Date();
    }

    // Call the manipulate function to
    // update the calendar display
    manipulate();
  });
});
