const libraryApi ={
    books:[
        {
            title:"To kill a mocking bird ",
            author:{
                name:"Harper Lee",
                nationality:"American",
            },
            genres:["Fiction","classic"],
            reviews:[
               {
                reviewer:"john doe",
                rating: 5,
                comment:"A timeless classic.",
               },
            ],
        },
        {
            title: "1984",
            author: {
                name:"george orwell",
                nationality:"British",
    
            },
            genres:["Fiction","dystopian"],
            reviews:[
                {
                    reviewer:"Alice brown",
                    rating:5,
                    comment:"Impactful",
                },
            ],
        },
    ],
    
    };

    console.log(libraryApi.books[0].author);