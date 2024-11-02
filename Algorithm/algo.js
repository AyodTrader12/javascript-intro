// // let sentense = "this is the day that the lord has made";

// // let convertWord = (str) => {
// //   //step 1:convert str to arr
// //   let word = str.split(" ");

// //   //step 2:get an individual word
// // //   return word[0][0].toUppercase;

// // ppercase().Concat(word[0].slice(1));

// // convertWord(sentense);
// // };
// let sentense = "this is the day that the lord has made";

let convertWord = (str) => {
  // step 1: convert str ---> arr
  let word = str.split(" ");

  //   step 2: get an individual word
  let result = [];
  //   let res = "";

  //   for (let i of word) {
  for (let i = 0; i < word.length; i++) {
    result.push(word[i][0].toUpperCase().concat(word[i].slice(1)));

    //   result.push(x);
    //   res = res + " " + x;
    return result.join(" ");
  }
};
// //   return word
// //     .map((el) => {
// //       return el[0].toUpperCase().concat(el.slice(1));
// //     })
// //     .join(" ");

//   //   return res.trim();

//   //   return result.join(" ");
// };
// console.clear();
// console.log(convertWord(sentense));

// // // console.log("convertWord".slice(7));

const frequentAppearance = (str) => {
  let wrd = str.toLowerCase();

  let x = {};

  for (let i of wrd) {
    x[i] = ++x[i] || 1;
  }

  let numb = 0;
  let char = "";

  for (let i in x) {
    if (numb < x[i]) {
      numb = x[i];
      char = i;
    }
  }

  return `The most frequent occurrence of ${char}, with an appearance of ${numb}`;
};

console.log(frequentAppearance("Amakakkkkeeeeeee"));

let x = {};
console.log(x);
x.name = "Amaka";
console.log(x);

let arr = [1, 3, 5, 2, 9, 7];

const main = (array, x) => {
  let result = [];
  let i = 0;

  while (i < array.length) {
    result.push(array.slice(i, i + x));
    i = i + x;
  }

  return result;
};

console.log(main(arr, 2));

let sentence = "this is the day the lord has made";

let convertedWord = (str) => {
  let word = str.split(" ");

  let result = [];

  for (let i = 0; i < word.length; i++) {
    result.push(word[i][0].toUpperCase().concat(word[i].slice(1)));
  }
  return result.join(" ");
};
console.log(convertedWord(sentence));
