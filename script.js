const addButton = document.querySelector(".addButton");
const bookMenu = document.querySelector(".book-menu");
const bookList = document.querySelector(".bookList");
const scrollContainer = document.querySelector(".bookList");

for (let i = 1; i <= 20; i++) {
  const grid = document.createElement("div");
  grid.className = "grid";
  // grid.textContent = `Grid ${i}`;
  bookList.appendChild(grid);
}
// addButton.addEventListener("click", () => {
//   if (bookMenu.classList.contains("js-none")) {
//     bookMenu.classList.replace("js-none", "js-flex");
//   } else {
//     bookMenu.classList.replace("js-flex", "js-none");
//   }
// });
