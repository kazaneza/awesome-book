// book class
/* eslint-disable */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// UI Class: handle UI tasks

class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('.book');

    const row = document.createElement('tr');

    row.innerHTML = `
        <div class="book-details">
        
        <p>"${book.title}"</p>
        <p>by</p>
        <p>${book.author}</p>
       
       
        <button><a href="#" class="button">remove</a></button>
        
        </div>
        `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('button')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  }
}

// Store class: handles storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(author) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.author === author) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// event display books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// event add a book

document.querySelector('#book-form').addEventListener('submit', (e) => {
  // prevent actual submit
  e.preventDefault();
  // get form values
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;

  // validate
  if (title === '' || author === '') {
    alert('Please fill in all fields');
  } else {
    // instatiate book
    const book = new Book(title, author);

    // add to ui

    UI.addBookToList(book);

    // add book to store
    Store.addBook(book);

    // clear fields.
    UI.clearFields();
  }
});

// event: Remove a Book
document.querySelector('.book').addEventListener('click', (e) => {
  UI.deleteBook(e.target);

  // Remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});
