const bookTable = document.querySelector('table');
const tableBody = document.getElementById('tableBody');

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    if (read) {
      read = 'already read';
    } else {
      ('have not read yet');
    }
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

function addBook(obj) {
  myLibrary.push(obj);
}

const book1 = new Book('Matematika itu Menyenangkan', 'Ilmi Kalam', 333, true);
const book2 = new Book('Fisika itu Susah', 'SopiCOD', 132, false);

addBook(book1);
addBook(book2);

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
