const btns = document.querySelectorAll(".table-btn");
const tables = document.querySelectorAll(".js-table");

for (const btn of btns) {
  btn.addEventListener("click", () => {
    let data = btn.getAttribute("data-active");

    for (const table of tables) {
      if (data === table.getAttribute("data-tab").valueOf()) {
        table.classList.remove("none");
      } else if (!table.classList.contains("none")) {
        table.classList.add("none");
      }
    }
  });
}
