let titleInput = document.querySelector("#input-title");
let authorInput = document.querySelector("#input-author");
let pagesInput = document.querySelector("#input-pages");
let readInput = document.querySelector("#input-read");
const btnSubmit = document.querySelector("#submit");
const form = document.querySelector("#form-book");

// Book constructor
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}
let myLibrary = [];
let newBook;

function addBook(i) {
  const bookList = document.querySelector("#book-list");
  let divBook = document.createElement("div");
  divBook.classList.add("book");
  divBook.setAttribute("data-index", `${i}`);

  const title = titleInput.value;
  let divTitle = document.createElement("div");
  divTitle.textContent = `Title: ${title}`;

  const author = authorInput.value;
  let divAuthor = document.createElement("div");
  divAuthor.textContent = `Author: ${author}`;

  const pages = pagesInput.value;
  let divPages = document.createElement("div");
  divPages.textContent = `Pages: ${pages}`;

  const read = readInput.value;
  let btnRead = document.createElement("button");
  if (read == "read") {
    btnRead.textContent = "Read";
    btnRead.style.backgroundColor = "#00ff44";
  } else {
    btnRead.textContent = "Not Read";
    btnRead.style.backgroundColor = "#ff0015";
  }
  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Delete";

  divBook.appendChild(divTitle);
  divBook.appendChild(divAuthor);
  divBook.appendChild(divPages);
  divBook.appendChild(btnRead);
  divBook.appendChild(btnDelete);
  bookList.appendChild(divBook);
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  btnDelete.addEventListener("click", () => {
    bookList.removeChild(divBook);
    myLibrary.splice(divBook, 1);
  });
  btnRead.addEventListener("click", () => {
    if (btnRead.textContent === "Read") {
      btnRead.textContent = "Not Read";
      btnRead.style.backgroundColor = "#ff0015";
    } else {
      btnRead.textContent = "Read";
      btnRead.style.backgroundColor = "#00ff44";
    }
  });
}

btnSubmit.addEventListener("click", (e, i) => {
  if (
    titleInput.value === "" ||
    authorInput.value === "" ||
    pagesInput.value === ""
  ) {
    alert("Please input title, author and page number!");
  } else {
    e.preventDefault();
    addBook(i);
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
  }
});
window.onload = function resetForm() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
};
