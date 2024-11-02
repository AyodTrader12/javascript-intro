let x = "YXZ";
let user = "XYz";

const ourFunction = (x, y) => {
  let xSplit = x.split("");
  let userSplit = y.split("");

  let resultUser = userSplit.sort().join("").toUpperCase();
  let resultX = xSplit.sort().join("").toUpperCase();

  console.clear();

  if (resultUser === resultX) {
    return true;
  } else {
    return false;
  }
};

// console.log(ourFunction(x, user));

let a = [1, 4, 3, 7, 11, 19, 15];

// console.log(
//   a.map((el) => {
//     return el;
//   })
// );

// console.log(
//   a.sort((a, b) => {
//     return b - a;
//   })
// );

// console.log(
//   a.filter((el) => {
//     return el !== 1;
//   })
// );

let entry = [
  {
    id: 1,
    name: "Mije",
    age: 20,
  },
  {
    id: 2,
    name: "Gift",
    age: 10,
  },
  {
    id: 5,
    name: "Gift",
    age: 15,
  },
  {
    id: 4,
    name: "Gift",
    age: 7,
  },
  {
    id: 3,
    name: "John Doe",
    age: 30,
  },
];

const search = (arr, user) => {
  let a = arr.filter((el) => {
    return el.name === user;
  });

  return a;
};
console.clear();

const remove = (arr, id) => {
  let a = arr.filter((el) => {
    return el.id !== id;
  });

  return a;
};

console.log(
  entry
    .map((el) => {
      return el.name;
    })
    .sort()
);

let xx = Array.from({ length: 10 }, () => {
  let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@^%";

  let score = Math.round(Math.random() * 100);
  let a1 = Math.round(Math.random() * a.length);

  return { name: ${a[a1]}, score };
});

console.log(xx);

 