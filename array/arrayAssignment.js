const markplace = [
    {
      client: {
        id: 101,
        name: "Jessica Felix",
        email: "jessicafelix@code.com",
        location: "New York, USA",
      },
      product: [
        {
          id: 1,
          name: "Laptop",
          price: 1200,
          category: "Elecronics",
          stock: 50,
        },
        {
          id: 2,
          name: "Smartphones",
          price: 800,
          category: "Electronics",
          stock: 30,
        },
        {
          id: 3,
          name: "Tablet",
          price: 450,
          category: "Elecronics",
          stock: 20,
        },
      ],
    },
    {
      client: {
        id: 102,
        name: "Daniel George",
        email: "danielgeorge@gmail.com",
        location: "Los Angeles, USA",
      },
      product: [
        {
          id: 4,
          name: "Headphone",
          price: 150,
          category: "Accessories",
          stock: 100,
        },
        {
          id: 5,
          name: "Keyboard",
          price: 70,
          category: "Accessories",
          stock: 150,
        },
        {
          id: 6,
          name: "Mouse",
          price: 50,
          category: "Acessories",
          stock: 200,
        },
      ],
    },
    {
      client: {
        id: 103,
        name: "Charlie Openda",
        email: "charlieopenda@codelab.com",
        location: "Chicago, USA",
      },
      product: [
        {
          id: 7,
          name: "chair",
          price: 300,
          category: "Furniture",
          stock: 10,
        },
        {
          id: 8,
          name: "Desk",
          price: 500,
          category: "Furniture",
          stock: 5,
        },
        {
          id: 9,
          name: "Lamp",
          price: 100,
          category: "Furniture",
          stock: 25,
        },
      ],
    },
  ];
  
  //1
  
  const allProductNames = markplace.map((mark) => {
    return mark.product.map((names) => {
      return names.name;
    });
  });
  // console.log(allProductNames);
  
  // 2
  
  let allPrices = markplace.map((mark) => {
    return mark.product.map((prices) => {
      return prices.price;
    });
  });
  // console.log(allPrices);
  
  //3
  const allCategory = markplace.map((mark) => {
    return mark.product.map((categories) => {
      return categories.category;
    });
  });
  
  // console.log(allCategory);
  
  //4
  const allStock = markplace.map((mark) => {
    return mark.product.map((stocks) => {
      return stocks.stock;
    });
  });
  // console.log(allStock);
  
  //5
  const allId = markplace.map((mark) => {
    return mark.product.map((ids) => {
      return ids.id;
    });
  });
  // console.log(allId);
  
  //6
  let x;
  const numberOfProducts = markplace.map((mark) => {
    return mark.product.map((names) => {
      return names;
    });
  });
  // console.log(
  //   numberOfProducts.map((el) => {
  //     return el.length;
  //   })
  // );
  
  //7
  const totalPrice = markplace.map((mark) => {
    return mark.product.map((values) => {
      return values.price * values.stock;
    });
  });
  totalPrice.map((el) => {
    return;
  });
  
  // console.log(totalPrice);
  
  // const totalStock = markplace.map((mark) => {
  //   return mark.product.map((values) => {
  //     return values.stock;
  //   });
  // });
  
  // let total = totalPrice.map((el) => {
  //   return el.map * totalStock;
  // });
  
  // console.log(total);
  
  //8
  ///const clientAbove500 = markplace.map((el) => {
     //markplace.filter((client)=>{
    
   // });
 // });
  
  //console.log(
    //clientAbove500.map((el) => {
      //return el.filter((el) => {
        // return el > 500;
      // });
    // })
  // );
  
  //9
  // const allElectronics = markplace.map((el) => {
    // return el.product.map((el) => {
      // return el.category;
    // });
  // });
  
  // console.log(
    // allElectronics.map((el) => {
      // return el.filter((el) => {
        // return el === "Electronics";
      // });
    // })
  // );
  
  //10
  // const stockLessThan20 = markplace.map((el) => {
    // return el.product.map((el) => {
      // return el.stock;
  // });
  // });
  
  // console.log(
  //   stockLessThan20.map((el) => {
  //     return el.filter((el) => {
  //       return el < 20;
  //     });
  //   })
  // );

  const above500 = markplace.map((el)=>{
    return el.product

  })
// console.log(above500);

const productAbove500 = above500.filter((el)=>{
  return el.price < 500
})

const above = above500.map((e)=>{
  return e.filter(e => e.price > 500? e : null)
})

console.log(above)