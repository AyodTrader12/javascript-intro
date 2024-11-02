let word = "wo-r-**d!!";

const newWord = () => {
  let splitWord = word.split("");
  return splitWord.includes("w");
};
console.clear();
console.log(newWord(word));

let a = "word";
let b = "dorw";
// // word ====> wo-r-**d!!!

// const { TfiRuler } = require("react-icons/tfi");

// let x = ["*", "-", "!"];
// let xx = "wo-r-**d!!!";
// let wx = xx.split("");

// let w = "*";

// console.log(
//   wx
//     .filter((el) => {
//       return !x.includes(el);
//     })
//     .join("")
// );

// const helper = (str) => {
//   let xa = str.toLowerCase().replace(/[\W]/g, "");
//   let x = {};

//   for (let i of xa) {
//     x[i] = ++x[i] || 1;
//   }

//   return x;
// };

// const main = (a, b) => {
//   //   let x = ["*", "-", "!"];
//   //   let c = b.split("");

//   //   let d = c.filter((el) => {
//   //     return !x.includes(el);
//   //   });

//   let textA = helper(a);
//   let textB = helper(b);

//   if (Object.keys(textA).length !== Object.keys(textB).length) return false;

//   for (let i in textA) {
//     if (textA[i] !== textB[i]) return false;
//   }

//   return true;
// };

// console.clear();
// console.log(main("worD!", "O-w-r-**D!!!"));

// // console.log("po-r-**d!!!");
