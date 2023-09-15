const bookMenu = document.querySelector(".book-menu");
const bookList = document.querySelector(".bookList");
const template = document.createElement("template");

for (let i = 1; i <= 20; i++) {
  const grid = document.createElement("div");
  grid.className = "grid";
  // grid.textContent = `Grid ${i}`;
  bookList.appendChild(grid);
}
// template.bookList.append(document.createElement("div"));
// document.head.append(template);
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const submit = document.querySelector(".btn-submit");
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    saveUserData();
  });

  function saveUserData() {
    const bookName = document.querySelector("#bookName").value;
    const bookAuthor = document.querySelector("#author").value;
    const bookPages = document.querySelector("#book-pages").value;
    const bookRead = document.querySelector("#read").checked;

    const formData = {
      bookName: bookName,
      author: bookAuthor,
      pages: bookPages,
      read: bookRead,
    };

    console.log(formData);
  }
});
function addBook() {}
