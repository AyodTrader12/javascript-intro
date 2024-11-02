const libary = [
    {
    section: "Fiction",
    books: ["1984","Brave New World","Farenheit 451"],
    },
    {
        section: "Non-fiction",
        books: ["sapiens","educated","the Immortal Life of Henrietta Lacks"],
    },
    {
        section: "Science",
        books: ["A Brief History of Time","The Selfish Gene","Cosmos"],
    },
];

const books =[
    "1984",
    "To kill a Mockingbird",
    "The Great Gatsby",
    "Pride and Predijure",
    "The catcher in the Rye",
];

// solutions
//1 complex string joining
const joinBooks = books.join(",");
console.log(joinBooks);
const lastBook = books.pop();
console.log(lastBook);

const addBooks =books.unshift("war and peace");
console.log(addBooks);
const bookss = books.join(":");
console.log(bookss);


//2 remove and return first book
const deleteFirstBook = books.shift();
console.log(deleteFirstBook);

const returnBook = books.unshift(deleteFirstBook);
console.log(returnBook);
const addEnd = books.push("pride and predijure");
const removeBook = books.shift();
const returningBook =books.unshift(removeBook);
console.log(books);
//3 add to begining and remove
const addNewBook = books. unshift("pride and predijure");
console.log(addNewBook);
const addNewBook2 = books.unshift("war and peace");
console.log(addNewBook2);
const removeFirstBook = books.shift();
const returnFurstBook = books.unshift(removeFirstBook);
console.log(books);

//4 Add to the end and modify
const endBook = books.push("war and peace");
console.log(endBook);
const removingBook = books.shift();
console.log(removingBook);
const allBooks = books.join();
console.log(allBooks);

//5 remove and Add books
const removeLastBook = books.pop();
const returnLastBook = books.push(removeLastBook);
console.log(books);
const addPride = books.unshift("pride and predijure");
const addwar = books.push("war and peace");
console.log(books);














