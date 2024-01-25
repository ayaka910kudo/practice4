const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

const addBook = (title, author, year) => {
  books.push({
    id: books.length + 1,
    title: title,
    author: author,
    year: year,
  });
};

addBook("吾輩は犬", "あいと", 2023);

const deleteBook = (id) => {
  books.forEach((book, index) => {
    if (book.id === id) {
      delete books[index];
    }
  });
};

deleteBook(5);

const updateBook = (id, title, author, year) => {
  books.forEach((book, index) => {
    if(book.id === id){
        books[index] = {
            id: id,
            title: title,
            author: author,
            year: year,
          };
    }
    
  });
};

updateBook(6,"吾輩は猫","和弦",2023)
console.log(books);
