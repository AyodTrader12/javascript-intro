const power="The quick brown fox jumps over the lazy dog";
const remove = power.slice(10,16);
const capitalized = power.slice(10,16).toUpperCase();
console.log(capitalized)

const removeWord = power.replace("lazy", "")
const replaceWord = removeWord.replace("dog", capitalized)
console.log(replaceWord);
2. // domain and userName instruction
const email ="student.Name@schoolDomain.com";
console.log(email.slice(19,25).toLowerCase());
console.log(email.slice(8,12).toUpperCase());
const userName ="student.name@";
const uni = email.slice(19,25);
console.log(userName.toUpperCase().concat(uni));


 

















