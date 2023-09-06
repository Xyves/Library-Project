const myLibrary = [
  "Harry Potter",
  "The Lord of the Ring",
  "Hobbit",
  "V for Vendetta",
];

function Book() {
  // the constructor
}

function addBookToLibrary() {
  //
}
myLibrary.forEach((element) => console.log(element));
const scrollContainer = document.querySelector(".bookList");

for (let i = 1; i <= 20; i++) {
  const grid = document.createElement("div");
  grid.className = "grid";
  grid.textContent = `Grid ${i}`;
  bookList.appendChild(grid);
}
