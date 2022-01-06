let myLibrary = [];

let titleInput = document.querySelector(".title-input");
let authorInput = document.querySelector(".author-input");
let pagesInput = document.querySelector(".pages-input");
let readInput = document.querySelector(".read-input");
const libraryContainer = document.querySelector("#library-container");
const addBtn = document.querySelector("#addBtn");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}.`;
  };
}

function addBookToLibrary() {
  event.preventDefault();
  newBook = new Book(titleInput, authorInput, pagesInput, readInput);
  myLibrary.push(newBook);
}

function displayBook(item) {
  const divBook = document.createElement("div");
  const divTitle = document.createElement("p");
  const divAuthor = document.createElement("p");
  const divPages = document.createElement("p");
  const readBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  divTitle.textContent = item.title;
  divTitle.classList.add("title");
  divBook.append(divTitle);
  divAuthor.textContent = item.author;
  divAuthor.classList.add("author");
  divBook.append(divAuthor);
  divPages.textContent = item.pages;
  divPages.classList.add("pages");
  divBook.append(divPages);
}

addBtn.addEventListener("click", displayBook());

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("open-modal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
