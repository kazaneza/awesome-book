import menu from './modules/menu.js';
import Book from './modules/BookStorage.js';
import { DateTime } from './modules/luxon.js';
import storebooks from './modules/storebooks.js';

menu();
class UI {
  static displayBooks() {
    const books = storebooks.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#data');

    const div = document.createElement('div');
    div.className = 'data-cont';

    div.innerHTML = `
          <p>"${book.title}"</p>
          <p>by</p>
          <p>${book.author}</p>
          <div><button id="remove-btn" class='delete'>Remove</button></div>
       `;

    list.appendChild(div);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearField() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// form submission to the add button
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);

  // Add data to screen
  UI.addBookToList(book);

  // Add book to storebooks
  storebooks.addBook(book);

  // clear all fields
  UI.clearField();
});

// Removing book data
const data = document.querySelector('#data');
data.addEventListener('click', (e) => {
  // Remove book from interface
  UI.deleteBook(e.target);
  // Remove book from local storage
  storebooks.removeBook(e.target.parentElement.previousElementSibling.textContent);
});

// Luxon Date and time
const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('timeText').innerHTML = currentDate;
