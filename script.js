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

function addBookToLibrary() {}
