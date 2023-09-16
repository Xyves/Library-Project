const bookMenu = document.querySelector(".book-menu");
const bookList = document.querySelector(".bookList");
const template = document.querySelector("#myTemplate");

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

    addBook(formData);
  }
});

function addBook(formData) {
  const clone = document.importNode(template.content, true);
  const topHeader = clone.querySelector(".topHeader");
  const bottomCard = clone.querySelector(".bottomCard");
  bottomCard.querySelector("#cardRead").checked = formData.read;
  topHeader.querySelector("h2").textContent = `${formData.bookName}`;
  topHeader.querySelector(".bookAuthor").textContent = `${formData.author}`;
  topHeader.querySelector(".pages").textContent = `${formData.pages}`;
  bookList.appendChild(clone);
  form.reset();
}
function clear() {}
