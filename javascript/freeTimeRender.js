let dates = document.querySelectorAll(".date");
let container = document.getElementById("time-table");
let dateViewer = document.querySelector(".time-table-header");

dates.forEach((btn) => {
  btn.addEventListener("click", () => {
    let cYear = btn.getAttribute("data-current-year");
    let cMonth = btn.getAttribute("data-current-month");
    let cDay = btn.getAttribute("data-current-day");
    let c = "";

    dateViewer.innerText = `${cYear}-${cMonth}-${cDay}`;

    for (let i = 0; i < 24; i++) {
      c += `<div class="time-available">
                <span class="start-time">8:00</span>
                <span class="end-time">8:30</span>
            </div>`;
    }
    container.innerHTML = c;
  });
});
