let myLibrary = [];

let mainScreen = document.getElementById("mainScreen");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function printBooks() {
    
    for (let i = (myLibrary.length-1); i < myLibrary.length; i++) {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCards");
        mainScreen.appendChild(bookCard);

        const cardTitle = document.createElement("h3");
        cardTitle.classList.add("bookTitle");
        const cardAuthor = document.createElement("div");
        cardAuthor.classList.add("bookAuthor");
        const cardPages = document.createElement("div");
        cardPages.classList.add("bookPages");


        const authorHeader = document.createElement("h4");
        authorHeader.classList.add("author");
        const pagesHeader = document.createElement("h4");
        pagesHeader.classList.add("pages");
        
        bookCard.appendChild(cardTitle);
        bookCard.appendChild(cardAuthor);
        bookCard.appendChild(cardPages);
        bookCard.appendChild(authorHeader);
        bookCard.appendChild(pagesHeader);

        authorHeader.textContent = "Author: ";
        pagesHeader.textContent = "Pages: ";
        cardTitle.textContent = myLibrary[i].title;
        cardAuthor.textContent = myLibrary[i].author;
        cardPages.textContent = myLibrary[i].pages;
    }
}

function AddToLibrary() {
    bookTitle = document.getElementById("bookTitle").value; // Booktitle its whatever we write in the Book Title Input field
    bookAuthor = document.getElementById("bookAuthor").value; // Book Author its whatever we write in the Book Author Input field
    bookPages = document.getElementById("bookPages").value; // Book Pages its whatever we write in the Book Author Input field

    newBook = new Book(bookTitle, bookAuthor, bookPages);

    if (bookTitle != "" && bookAuthor != "" && bookPages != "") {
        myLibrary.push(newBook);
        document.getElementById("bookTitle").value = "";
        document.getElementById("bookAuthor").value = "";
        document.getElementById("bookPages").value = "";
        printBooks();
    }
}
document.getElementById("insertBook").addEventListener("click", AddToLibrary);

function openForm() {
    document.getElementById("myForm").style.visibility = "visible";
    document.getElementById("myForm").style.opacity = "1";
}

function closeForm() {
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookPages").value = "";
    document.getElementById("myForm").style.visibility = "hidden";
    document.getElementById("myForm").style.opacity = "0";
}

document.getElementById("newBookButton").addEventListener("click", openForm);
document.getElementById("btnCancel").addEventListener("click", closeForm);
