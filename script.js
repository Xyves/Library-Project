const bookMenu = document.querySelector(".book-menu");
const bookList = document.querySelector(".bookList");
const form = document.querySelector("form");

document.addEventListener("DOMContentLoaded", function () {
  const submit = document.querySelector(".btn-submit");
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    saveUserData();
  });
  class createData {
    constructor(bookName, bookAuthor, bookPages, bookRead) {
      this.bookName = bookName;
      this.bookAuthor = bookAuthor;
      this.bookPages = bookPages;
      this.bookRead = bookRead;
    }
  }
  function saveUserData() {
    const bookName = document.querySelector("#bookName").value;
    const bookAuthor = document.querySelector("#author").value;
    const bookPages = document.querySelector("#book-pages").value;
    const bookRead = document.querySelector("#read").checked;
    const formData = new createData(bookName, bookAuthor, bookPages, bookRead);
    console.log(formData);
    if (
      bookName !== "" &&
      bookAuthor !== "" &&
      bookPages !== "" &&
      bookRead !== ""
    ) {
      addBook(formData);
    } else {
      document.querySelector("#bookName").placeholder = "Update the book name!";
      document.querySelector("#author").placeholder = "Update the author!";
      document.querySelector("#book-pages").placeholder =
        "Update the number of pages!";
    }
  }
});
let cardCount = 4;
function addBook(formData) {
  const template = document.querySelector("#myTemplate");
  const clone = document.importNode(template.content, true);
  const card = clone.querySelector(".bookCard");
  const topHeader = clone.querySelector(".topHeader");
  const bottomCard = clone.querySelector(".bottomCard");
  const input = bottomCard.querySelector("input[type='checkbox']");

  // Generate inique ID
  const inputId = `cardRead${cardCount}`;
  const labelFor = inputId;

  input.id = inputId;

  // Label
  const label = card.querySelector("label");
  label.setAttribute("for", labelFor);

  input.checked = formData.bookRead;
  topHeader.querySelector("h2").textContent = `${formData.bookName}`;
  topHeader.querySelector(".bookAuthor").textContent = `${formData.bookAuthor}`;
  topHeader.querySelector(".pages").textContent = `${
    formData.bookPages + " " + "pages"
  }`;
  bookList.appendChild(clone);

  // Increment cardCount
  cardCount++;
  // Reset form
  form.reset();
}
function clear() {}
