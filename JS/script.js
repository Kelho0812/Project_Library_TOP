let myLibrary = [];

let mainScreen = document.getElementById("mainScreen");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let deleteBooks = function () {
    let attribute = this.getAttribute("data-index-number");
    myLibrary.splice(attribute,1);
    printBooks();
};

//This is the function that gets all the books from the myLibrary Array & then prints them out on the DOM. First it will delete all the DOM it created previously, to clean it, and then it will print a fresh batch.
function printBooks() {
    let mainScreen = document.getElementById("mainScreen");

    while (mainScreen.hasChildNodes()) {
        mainScreen.removeChild(mainScreen.firstChild);
    }

    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCards");
        mainScreen.appendChild(bookCard);

        const cardTitle = document.createElement("div");
        cardTitle.classList.add("bookTitle");
        const cardAuthor = document.createElement("div");
        cardAuthor.classList.add("bookAuthor");
        const cardPages = document.createElement("div");
        cardPages.classList.add("bookPages");
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButton");
        deleteButton.dataset.indexNumber = i;

        const authorHeader = document.createElement("div");
        authorHeader.classList.add("author");
        const pagesHeader = document.createElement("div");
        pagesHeader.classList.add("pages");
        const readHeader = document.createElement("div");
        readHeader.classList.add("read");

        bookCard.appendChild(cardTitle);
        bookCard.appendChild(cardAuthor);
        bookCard.appendChild(cardPages);
        bookCard.appendChild(authorHeader);
        bookCard.appendChild(pagesHeader);
        bookCard.appendChild(readHeader);
        bookCard.appendChild(deleteButton);

        authorHeader.textContent = "Author: ";
        pagesHeader.textContent = "Pages: ";
        readHeader.textContent = "Read: ";
        cardTitle.textContent = myLibrary[i].title;
        cardAuthor.textContent = myLibrary[i].author;
        cardPages.textContent = myLibrary[i].pages;
        deleteButton.textContent = "X";
    }
    

    let deleteButtonList = document.getElementsByClassName("deleteButton");

    for (l = 0; l < deleteButtonList.length; l++) {
        deleteButtonList[l].addEventListener("click", deleteBooks, false);
    }
}

function AddToLibrary() {
    bookTitle = document.getElementById("bookTitle").value; // Booktitle its whatever we write in the Book Title Input field
    bookAuthor = document.getElementById("bookAuthor").value; // Book Author its whatever we write in the Book Author Input field
    bookPages = document.getElementById("bookPages").value; // Book Pages its whatever we write in the Book Author Input field
    bookRead = document.getElementById("bookRead").checked;
        
    newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);

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
