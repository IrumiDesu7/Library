const submitButton = document.querySelector('.submitBtn');
const table = document.querySelector('tbody');
const addButton = document.querySelector('.addButton');
const modalContainer = document.querySelector('.modalContainer');
const closeModalBtn = document.querySelector('.close');

let myLibrary = [];
let radioValue;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

addButton.addEventListener('click', () => {
  modalContainer.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});

document.addEventListener('click', (e) => {
  if (e.target == modalContainer) {
    modalContainer.style.display = 'none';
  }
});

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));

  let displayArray = myLibrary.map((item) => {
    return `<tr>
      <th>${item.title}</th>
      <th>${item.author}</th>
      <th>${item.pages}</th>
      <th>${item.read}</th>
    </tr>`;
  });
  displayArray = displayArray.join('');
  let tableHeader = `<tr>
          <th>Title</th>
          <th>Author</th>
          <th>Pages</th>
          <th>Read</th>
        </tr>`;
  table.innerHTML = tableHeader + displayArray;
}

submitButton.addEventListener('click', function () {
  radioValue = document.querySelector('input[name="read"]:checked').value;
  if (title.value === '' || author.value === '' || pages.value === '') {
    return;
  } else {
    addBookToLibrary(title.value, author.value, pages.value, radioValue);
  }
  // title.value = '';
  // author.value = '';
  // pages.value = '';
});
