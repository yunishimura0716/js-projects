//Book class
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class UI{
    addBookList(book){
        const list = document.getElementById('book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;

        list.appendChild(row);
    }
    showAlert(msg, className){
        //creaet div
        const div = document.createElement('div');
        //add class
        div.className = `alert ${className}`;
        //add text
        div.appendChild(document.createTextNode(msg));
        //insert before form
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        //disapper after 3 seconds
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }
    deleteBook(target){
        if(target.className === "delete"){
            target.parentElement.parentElement.remove();
        }
    }
    clearValue(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}
//using Local storage
class Storage{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static displayBooks(){
        const books = Storage.getBooks();
        //display books
        books.forEach(function(book){
            const ui = new UI();
            ui.addBookList(book);
        });
    }
    static addBook(book){
        const books = Storage.getBooks();
        //add book
        books.push(book);
        //store at LS
        localStorage.setItem('books', JSON.stringify(books));
    }
    static deleteBook(isbn){
        const books = Storage.getBooks();
        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

//DOM listener
document.addEventListener('DOMContentLoaded', Storage.displayBooks);
//Event Listeners to add books
document.getElementById('book-form').addEventListener('submit', function(e){
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
    
    //instance of Book
    const book = new Book(title, author, isbn);

    //instance of UI
    const ui = new UI();

    //check no blank on each input
    if(title === '' || author === '' || isbn === ''){
        msg = "Please fill in all fields";
        ui.showAlert(msg, 'error');
    } else {
        ui.addBookList(book);
        //store at LS
        Storage.addBook(book);
        ui.showAlert('Book Added!', 'success');
        ui.clearValue();
    }
    e.preventDefault();
});
//delete book
document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI();
    //delete book
    ui.deleteBook(e.target);
    Storage.deleteBook(e.target.parentElement.previousElementSibling.textContent);
    //show alert
    ui.showAlert('Delete Book!', 'success');

    e.preventDefault();
});