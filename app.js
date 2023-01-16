 // Getting values from input fields
 
 
  // store book 
  

  // Diplaying books 
  function DispayAwesomeBooks() {
    const listOfBooks = document.querySelector('.books-list');
    listOfBooks.innerHTML = `
                <ul class="book-list"/>
                ${createBooks(storeData)}</ul>
            `;
  }
  
  // Adding books
  function addBook(bookTitle, bookAuthor) {
    const Book = {
      title: bookTitle,
      author: bookAuthor,
    };
    storeData.push(Book);
    updateBook();
    DispayAwesomeBooks();
  }
  // Remove data from local storage
  function removeBook(i) {
    storeData.splice(i, 1);
    updateBook();
    DispayAwesomeBooks();
  }
  removeBook();
  
 
  
  window.onload = DispayAwesomeBooks();