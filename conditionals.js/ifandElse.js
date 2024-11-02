// 1
let temperature = 35;
if (temperature < 36){
console.log("its pretty hot today ooo");
}else{
console.log("Today hot die");
}
// 2
let itsRaining = "ibrahim";
if(itsRaining === "ibrahim"){
console.log("rain dey fall");
}else{
console.log("its not raining");
}

//  3
let age = 7;
if(age >= 20){
console.log("you are officially an adult");
}else if(age < 20 && age >= 15){
console.log("you are a teenager");
}else if(age < 20 && age >= 15){
console.log("you are still in puberty");
}else if(age < 10){
console.log("you are a toddler");
}else{
console.log("you are currently dead");
}
               

// 4
const companyEmail = "kenny@codelab.com";
const password = "Hello12345";
const userName = companyEmail.slice(0, companyEmail.indexOf("@"));

if (companyEmail && password) {
  if (companyEmail === "kenny@codelab.com") {
    if (password === "Hello12345") {
      if (companyEmail === "kenny@codelab.com" && password === "Hello12345") {
        console.log(`Welcome to Your dashboard ${userName}`);
      } else {
        console.log("Your Details are incorrect");
      }
    } else {
      console.log("Incorrect Password");
    }
  } else {
    console.log("Incorrect Email");
  }
} else {
  console.log("Error, There is no email or password");
}
                