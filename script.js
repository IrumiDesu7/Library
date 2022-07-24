const olElement = document.querySelector('.book-cards');
const saveBtn = document.querySelector('.save-btn');
const bookForm = document.querySelector('.book-form');
const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const inputRead = document.querySelector('#read');

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

saveBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBook(
    inputTitle.value,
    inputAuthor.value,
    inputPages.value,
    inputRead.checked
  );
  displayBook(myLibrary);
  localStorage.setItem('books', JSON.stringify(myLibrary));
});

function displayBook(booksArr) {
  const booksElement = booksArr.map((book) => {
    return `
      <div class='card-item'>
        <p class='book-title'>${book.title}</p>
        <p class='book-author'>${book.author}</p>
        <p class='book-pages'>${book.pages}</p>
        <p class='book-read'>${book.read}</p>
      </div>
      `;
  });
  olElement.innerHTML = booksElement.join('');
}

window.addEventListener('DOMContentLoaded', () => {
  displayBook(JSON.parse(localStorage.getItem('books')) || []);
});
