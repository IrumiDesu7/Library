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
  table.innerHTML = `<tr>
        <th>Title</th>
        <th>Author</th>
        <th>Pages</th>
        <th>Read</th>
      </tr>`;

  let displayArray = myLibrary.map((item) => {
    const newRow = document.createElement('tr');
    const titleData = document.createElement('td');
    const authorData = document.createElement('td');
    const pagesData = document.createElement('td');
    const readData = document.createElement('td');
    titleData.textContent = item.title;
    authorData.textContent = item.author;
    pagesData.textContent = item.pages;
    readData.textContent = item.read;
    newRow.appendChild(titleData);
    newRow.appendChild(authorData);
    newRow.appendChild(pagesData);
    newRow.appendChild(readData);
    table.appendChild(newRow);
  });
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
