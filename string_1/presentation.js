const libraryAPI = {
    books: [
        {
            title: "To Kill a Mockingbird",
            author: {
                name: "Harper Lee",
                nationality: "American",
            },
            genres: ["Fiction","Classic"],
            reviews: [
                {
                    reviewer: "John Doe",
                    rating:5,
                    comment: "A timeless classic.",
                },
                {
                    reviewer: "Jane Smith",
                    rating: 4,
                    comment: "Great read.",
                },
            ],
        },
        {
            title: "1984",
            author:{
                name: "George Orwell",
                nationality: "British",
            },
            genres:["Fiction","Dystopian"],
            reviews: [
                {
                    reviewer: "Alice Brown",
                    rating: 5,
                    comment: "Impactful.",
                },
            ],
        },
    ],
};
 
// using string methods

console.log(libraryAPI.books[0].title);
console.log(libraryAPI.books[0].title.toUpperCase());
console.log(libraryAPI.books[0].title.toUpperCase().slice(0,10));
console.log(libraryAPI.books[0].author.name);
console.log(libraryAPI.books[1].author.name.toLowerCase());
console.log(libraryAPI.books[1].author.name.toLowerCase().replace(" ","&"));
console.log(libraryAPI.books[1].author.nationality);
console.log(libraryAPI.books[1].nationality);
console.log(libraryAPI.books[1].reviews[0].comment.includes("impactful"));
console.log(libraryAPI.books[0].genres);
console.log(libraryAPI.books[0].reviews[0].rating);
console.log(libraryAPI.books[0].reviews[1].comment);
console.log(libraryAPI.books[1].title);
console.log(libraryAPI.books[1].title.substring(0,4));
console.log(libraryAPI.books[1].title.substring(0,4).toUpperCase() +" A Dystopian Novel");
console.log(libraryAPI.books[1].genres);
console.log(libraryAPI.books[1].reviews[0].comment);
console.log(libraryAPI.books[0].author.nationality);
console.log(libraryAPI.books[1].title.repeat(3));
console.log(libraryAPI.books[1].title.repeat(3).replaceAll("1984","Ninteen Eighty-Four"));
console.log(libraryAPI.books[1].title.repeat(3).replaceAll("1984","Ninteen Eighty-Four").slice(0,39));



