const olElement = document.querySelector('.book-cards');
const saveBtn = document.querySelector('.save-btn');
const bookForm = document.querySelector('.book-form');
const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const inputRead = document.querySelector('#read');
const addBtn = document.querySelector('.add-btn');
const modalContainer = document.querySelector('.modal-container');
const closeModalBtn = document.querySelector('.close-modal');
let myLibrary = JSON.parse(localStorage.getItem('books')) || [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

function addBook(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

addBtn.addEventListener('click', () => {
  modalContainer.classList.contains('show')
    ? modalContainer.classList.remove('show')
    : modalContainer.classList.add('show');
});

closeModalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modalContainer.classList.remove('show');
});

saveBtn.addEventListener('click', (e) => {
  e.preventDefault();
  inputTitle.value && inputAuthor.value && inputPages.value
    ? addBook(
        inputTitle.value,
        inputAuthor.value,
        inputPages.value,
        inputRead.checked
      )
    : alert('Make sure you fill all the input form!');
  displayBook(myLibrary);
  localStorage.setItem('books', JSON.stringify(myLibrary));
});

function deleteBook(index) {
  myLibrary.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(myLibrary));
  displayBook(myLibrary);
}

function displayBook(booksArr) {
  const booksElement = booksArr.map((book, index) => {
    return `
      <div class='card-item' onclick='deleteBook(${index})'>
        <p class='book-title'>${book.title}</p>
        <p class='book-author'>${book.author}</p>
        <p class='book-pages'>${book.pages}</p>
        <p class='book-read'>${book.read}</p>
        <button class='book-delete'>Delete</button>
      </div>
      `;
  });
  olElement.innerHTML = booksElement.join('');
}

window.addEventListener('DOMContentLoaded', () => {
  displayBook(JSON.parse(localStorage.getItem('books')) || []);
});
