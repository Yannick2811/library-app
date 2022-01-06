// Book constructor
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// Library
const myLibrary = [];
let newBook;

// add a book to the Library
function addBookToLibrary() {
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}
const btnSubmit = document.querySelector("#submit");
btnSubmit.addEventListener("click", addBookToLibrary());
console.log(myLibrary);

// add book to DOM and display
function displayBook() {
  const display = document.querySelector("#book-list");
  const books = document.querySelectorAll(".book");
  books.forEach((book) => display.removeChild(book));

  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);
  }
}

//creates the book to be displayed
function createBook(item) {
  const library = document.querySelector("#book-list");
  const divBook = document.createElement("div");
  const divTitle = document.createElement("div");
  const divAuthor = document.createElement("div");
  const divPages = document.createElement("div");
  const btnRead = document.createElement("button");
  const btnRemove = document.createElement("button");

  divBook.classList.add("book");
  divBook.setAttribute("id", myLibrary.indexOf(item));

  divTitle.textContent = item.title;
  divTitle.classList.add("title");
  divBook.appendChild(divTitle);

  divAuthor.textContent = item.author;
  divAuthor.classList.add("author");
  divBook.appendChild(divAuthor);

  divPages.textContent = item.pages;
  divPages.classList.add("pages");
  divBook.appendChild(divPages);

  btnRead.classList.add("btnRead");
  divBook.appendChild(btnRead);
  if (item.read.value === "Read") {
    btnRead.textContent = "Read";
    btnRead.style.backgroundColor = "#1aff00";
  } else {
    btnRead.textContent = "Not Read";
    btnRead.style.backgroundColor = "#ff0008";
  }
  library.appendChild(divBook);
}
