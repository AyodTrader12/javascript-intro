const myName = "madam";
console.log(myName);
console.clear();
//1
const a = [2, 3, 4, 5, 6, 7, 8];
const b = [1, 2, 3, 4, 5];
const filterEven = (x) => {
  return x.filter((value) => (value % 2 === 0 ? value : null));
};

console.log(filterEven(a));
//2

const containElement = (a, b) => {
  return a.includes(b);
};

console.log(containElement(a, 15));

// console.log(a.reverse());

const reverseArray = (a) => {
  return a.reverse();
};

console.log(reverseArray(b));

const isEven = (x) => {
  if (x % 2 === 0) {
    return `${x}true`;
  }
  return `${x}, ${false}`;
};

console.log(isEven(1));

const filterOdds = (x) => {
  return x.filter((value) => (value % 2 !== 0 ? value : null));
};

console.log(filterOdds(b));

const ispalindrome = (x) => {
  return x.toLowerCase().split("").reverse().join("").includes(x.toLowerCase());
};

console.log(ispalindrome("Madam"));

const Login = (user, pass) => {
  const userData = {
    userName: "ibrahim",
    password: "1234@1234",
  };
  if (user === userData.userName && userData.password === pass) {
    return console.log("Login succesfully ");
  }
  return console.log("Login fialed check your cridential ");
};

console.log(Login("ibrahim", "1234@1234"));

const generatePassword = (x) => {
  const AZ = [
    "a",
    "b",
    "c",
    "D",
    "e",
    "f",
    "G",
    "H",
    "i",
    "j",
    "k",
    "L",
    "m",
    "n",
    "O",
    "p",
    "q",
    "r",
    "S",
    "t",
    "u",
    "V",
    "w",
    "x",
    "y",
    "Z",
  ];
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  0;
  let password = "";
  let Combin = AZ.concat(digits).join("");
  for (let index = 0; index < x; index++) {
    password += Combin.charAt(Math.floor(Math.random() * Combin.length));
  }

  return password;
};

console.log(generatePassword(5));
//9
function assignHouse() {
  let studentName = [
    "ibrahim",
    "aliamin",
    "mubarak",
    "habeeb",
    "hakeem",
    "muhammed",
  ];
  const house = ["yellow house", "green house", "blue house", "red house"];
  const randomHouse = Math.floor(Math.random() * house.length);
  const randomStudent = Math.floor(Math.random() * studentName.length);
  return ` ${studentName[randomStudent]} is assigned to ${house[randomHouse]}`;
}
console.log(assignHouse());
//10
const generateEmployeeId = () => {};

let arrayOfNames = ["Prince", "Ahmed", "Habeeb", "Joan"];

let arrayOfNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sportsHouses = ["Red House", "Blue House", "Green House", "Yellow House"];

// Create Letter Variables
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-|?";
// .................

// 8

const passwordGenerator = (lengthh) => {
  const allCharacters = lowercaseLetters + uppercaseLetters + numbers + symbols;

  const randomPassLength = Array.from({ length: lengthh }, () => {
    return allCharacters[Math.floor(Math.random() * allCharacters.length)];
  });

  const result = randomPassLength.join("");

  return result;
};

console.log();
console.log();
console.log("8: ", passwordGenerator(4));
console.log();
console.log();
console.log();

// 1
const filterEven1 = (array) => {
  const evenNumbers = array.filter((el) => {
    return el % 2 === 0;
  });

  return evenNumbers;
};

console.log("1: ", filterEven(arrayOfNumbs));

// 2
const containsElement = (array, element) => {
  const checkEl = array.includes(element);
  if (checkEl === true) {
    return `Yes ${element} is in the array`;
  } else {
    return `No ${element} is not in the array`;
  }
};

console.log("2: ", containsElement(sportsHouses, "Red House"));

// 3
const reverseArray1 = (array) => {
  const revarr = array.reverse();

  return revarr;
};

console.log("3: ", reverseArray(arrayOfNames));

// 4
const isEven1 = (num) => {
  let myNum = num;

  if (myNum % 2 === 0) {
    return `${myNum} is an even number`;
  } else {
    return `${myNum} is an odd number`;
  }
};

console.log("4: ", isEven(6));
console.clear();

let arrofID = [12345, 5674, 8292, 3284, 1922, 4382, 2230, 7344, 4393];

const splicedOut = arrofID.splice(arrofID.indexOf(12345), 1);
console.log(arrofID);

const book = (name) => {
  let x = booked;
  let y = x.toLowerCase();
  return y;
};

const book1 = (name) => {
  let x = booked;
  let y = x.toLowerCase();
  return y;
};