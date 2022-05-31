const submitButton = document.querySelector('.submitBtn');
const table = document.querySelector('tbody');
const addButton = document.querySelector('.addButton');
const modalContainer = document.querySelector('.modalContainer');
const closeModalBtn = document.querySelector('.close');
let deleteButtons = [];

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

function displayUpdate() {
  table.innerHTML = `<tr>
        <th>Title</th>
        <th>Author</th>
        <th>Pages</th>
        <th>Read</th>
        <th>Action</th>
      </tr>`;

  myLibrary.map((item, index) => {
    const newRow = document.createElement('tr');
    const titleData = document.createElement('td');
    const authorData = document.createElement('td');
    const pagesData = document.createElement('td');
    const readData = document.createElement('td');
    const deleteButton = document.createElement('button');

    titleData.textContent = item.title;
    authorData.textContent = item.author;
    pagesData.textContent = item.pages;
    readData.textContent = item.read;
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('data-index', `${index}`);
    deleteButton.classList.add('deleteBook');

    newRow.appendChild(titleData);
    newRow.appendChild(authorData);
    newRow.appendChild(pagesData);
    newRow.appendChild(readData);
    newRow.appendChild(deleteButton);
    table.appendChild(newRow);
    deleteButtons = document.querySelectorAll('.deleteBook');
  });
}
document.addEventListener('click', (e) => {
  if (e.target.dataset.index !== undefined) {
    myLibrary.splice(e.target.dataset.index, 1);
    displayUpdate();
  }
});

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
  displayUpdate();
}

submitButton.addEventListener('click', function () {
  radioValue = document.querySelector('input[name="read"]:checked').value;
  if (title.value === '' || author.value === '' || pages.value === '') {
    return;
  } else {
    addBookToLibrary(title.value, author.value, pages.value, radioValue);
  }
  title.value = '';
  author.value = '';
  pages.value = '';
  modalContainer.style.display = 'none';
});
