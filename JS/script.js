let myLibrary = [];

let mainScreen = document.getElementById("mainScreen");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function printBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCards");
        mainScreen.appendChild(bookCard);

        const cardTitle = document.createElement("div");
        cardTitle.classList.add("bookTitle");
        cardTitle.textContent = myLibrary[i].title;
        bookCard.appendChild(cardTitle);

        console.log(myLibrary[i].author);
    }
}

function AddToLibrary() {
    bookTitle = document.getElementById("bookTitle").value;
    bookAuthor = document.getElementById("bookAuthor").value;
    bookPages = document.getElementById("bookPages").value;

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
    document.getElementById("myForm").style.visibility = "hidden";
    document.getElementById("myForm").style.opacity = "0";
}

document.getElementById("newBookButton").addEventListener("click", openForm);
