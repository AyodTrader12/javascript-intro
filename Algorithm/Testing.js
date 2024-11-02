let mySentence =
  "good evening everyone my name is ibrahim and am studying in codelab";
// step1 convert string to array

let convertedWord = () => {
  convertWord = mySentence.split(" ");
  return convertWord
    .map((el) => {
      return el[0].toUpperCase().concat(el.slice(1));
    })
    .join(" ");
};

console.log(convertedWord(mySentence));


