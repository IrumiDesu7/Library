const bookTable = document.querySelector('table');
const tableBody = document.querySelector('#tableBody');
const addBookButton = document.querySelector('.addButton');
const modal = document.querySelector('#myModal');
const span = document.querySelector('.close');
const submitButton = document.querySelector('#submitButton');

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(obj) {
  myLibrary.push(obj);
}

const book1 = new Book('Matematika itu Menyenangkan', 'Ilmi Kalam', 333, true);

addBook(book1);

addBookButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

submitButton.addEventListener('click', () => {
  const bookTitle = document.querySelector('#title').value;
  const bookAuthor = document.querySelector('#author').value;
  const bookPages = document.querySelector('#pages').value;
  const readStatus = document.querySelector('input[name=isRead]:checked').value;
  const newBook = new Book(bookTitle, bookAuthor, bookPages, readStatus);
  addBook(newBook);
  displayItem(myLibrary);
  modal.style.display = 'none';
});

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

function displayItem(arr) {
  let books = '';
  arr.forEach((item) => {
    books += `<tr>
          <th>${item.title}</th>
          <th>${item.author}</th>
          <th>${item.pages}</th>
          <th>${item.read}</th>
        </tr>`;
    tableBody.innerHTML = books;
    bookTable.appendChild(tableBody);
  });
}

displayItem(myLibrary);

/*
Hey 👋 , I consoled logged your input value and your input value is being stored in the variable. 
Few other things... you might want to be consistent in grabbing your DOM elements either use getElementBy or querySelector. Also, in your html you don't have to wrap your modal inputs in the form element. Furthermore, trigger the submit button function inside the JS file rather than using onclick property from the HTML. Your book submitting button should have an eventListener that triggers another function to grab the input values to create a new Book, which then gets pushed to the array. Let us know how you are doing again
*/
