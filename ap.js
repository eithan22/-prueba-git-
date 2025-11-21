let books = JSON.parse(localStorage.getItem("books")) || [];
let editIndex = null;

document.getElementById("saveBtn").addEventListener("click", saveBook);


//ultimos ajustes
// GUARDAR o EDITAR
function saveBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = document.getElementById("year").value;

    if (!title || !author || !year) {
        alert("Todos los campos son obligatorios");
        return;
    }

    const book = { title, author, year };

    if (editIndex === null) {
        books.push(book);
    } else {
        books[editIndex] = book;
        editIndex = null;
    }

    localStorage.setItem("books", JSON.stringify(books));
    clearForm();
    loadBooks();
}
