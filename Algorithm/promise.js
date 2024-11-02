// // REGEX

// callBack

// const main = (cb) => {
//   setTimeout(() => {
//     cb();
//     clearTimeout();
//   }, 0);
// };

// main(() => {
//   console.log("I am a callBack: ", x);
// });
// let x = "Sixus";

// let promise = new Promise((resolve, reject) => {
//   if (true) {
//     return resolve("I went through");
//   } else {
//     return reject("I was rejected");
//   }
// });

// promise
//   .then((res) => {
//     console.log(res, name);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally called");
//   });

// let name = "Isreal";

// const promise = Promise.reject("hello world");

// promise
//   .catch((res) => {
//     console.log(res);
//   })

//   .finally(() => {
//     console.log("finally called");
//   });

const main = (x) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is the Call");
    }, x);
  });
};

main(3000)
  .then((res) => {
    console.log("got this in 3secs: ", res);
    return res;
  })
  .then((res) => {
    console.log("Another call", res);
  });

let resolve = Promise.all([main(3000), main(5000), main(4000)]);
resolve.then((res) => {
  console.log(res);
});

resolve.then((res) => {
  console.log(res);
});
``;

// console.log(resolve.then(() => {}));

// [{ id: 1, email: "peter@test.com", pwd: "peter" }];

// const userAuth = () => {
//   let name = "jane";
//   let pwrd = "jane";

//   return new Promise((resolve, reject) => {
//     if (name === "jane" && pwrd === "jane") {
//       return resolve(name);
//     } else {
//       return reject("invalid credentials");
//     }
//   });
// };

// console.log(userAuth());

// const loginUser = (user) => {
//   return `Promise.resolve(Welcome back ${user})`;
// };

// userAuth()
//   .then((res) => {
//     return res;
//   })
//   .then((res) => {
//     return loginUser(res);
//   })
//   .then((el) => {
//     console.log(el);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
