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

Book.prototype.toggleRead = function () {
  this.read = !this.read;
  displayBook(myLibrary);
  localStorage.setItem('books', JSON.stringify(myLibrary));
};

function addBook(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
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
  bookForm.reset();
});

function deleteBook(index) {
  myLibrary.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(myLibrary));
  displayBook(myLibrary);
}

function displayBook(booksArr) {
  const booksElement = booksArr.map((book, index) => {
    return `
      <div class='card-item' >
        <p class='book-title'>${book.title}</p>
        <p class='book-author'>${book.author}</p>
        <p class='book-pages'>${book.pages} pages</p>
        <p class='book-read'>${book.read ? 'Already read' : "Haven't read"}</p>
        <button class='book-delete' onclick='deleteBook(${index})'>Delete</button>
        <button class='book-read' onclick='console.log(myLibrary[${index}].toggleRead())'>Toggle Read</button>
      </div>
      `;
  });
  olElement.innerHTML = booksElement.join('');
}

window.addEventListener('DOMContentLoaded', () => {
  displayBook(myLibrary);
});
