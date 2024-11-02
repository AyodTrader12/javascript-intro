//PLAIN ORDER STRING METHODS

//1.length: start count from 1 and it ia javascript property
const paragraph =
"i am a boy learning javascript";
console.log(paragraph.length);

//2.toLowerCase
const personEmail ="IBRAHIMPOPOOLA@MAIL.COM";
console.log(personEmail.toLowerCase());

//3.toUpperCase
const companyEmail="ibrahimpopoola@mail.com";
console.log(companyEmail.toUpperCase());

//4.trim: trimEnd,trimStart
//trim:removes white space from front and back
const text=" hello and you are welcome to codelab today"
console.log(text.trim());

//trimEnd:removes white space from the back
//trimStart:removes white space from the front

//5.value of
const textII ="Lets work and acheive great things";
console.log(textII.valueOf());

//ARGUMENT STRING METHODS

//1.charAt:position number 
//charCodeAt:unicode value
const aboutJs = 
"javascript is a programming languagee used to build interactive web application";
console.log(aboutJs.charAt(14));
console.log(aboutJs.charCodeAt(14));

//2.concat:joining 
const aboutJsII ="It is the engine of your web application"
const firstName ="ibrahim";
const lastName ="popoola";
const at ="@";
const company = "codeLabOrganization";
const domain =".com";

console.log(firstName.concat(lastName));

//3.split
const valueGuests = "Dan and chi are esteemed guests for the charity event";
console.log(valueGuests.split(""));

const todaysDate ="20/07/2024";
console.log(todaysDate.split("/"));

//4.slice: add 1 to the end number
const evenTime  ="The charity events starts at 11:00am prompt";
console.log(evenTime.slice(0,11));
console.log(evenTime.slice(29,36));
console.log(evenTime.slice(36,43));

//5.startsWith, and endWith
const agenda ="The charity event is to raise money for rural communities";
console.log(agenda.startsWith("The"));
console.log(agenda.startsWith("communities"));

//6.replace,and replaceAll
const simpleEasy =
"He was held at a gun point at the bus-stop.Thank God the police intervened and he was safe.He is now at home";
console.log(simpeEasy.replace("he,2pac"));

//7.repeat
const essyII ="she was held at a gunpoint";
console.log(essayII.repeat(10));
// ...

// 10. startsWith & endsWith 
const agenda1 = 
  "The charity event agenda is to rais money for rural communities"; 
 
console.log("checking .startsWith =", agenda.startsWith("The")); 
// It Returns Boolean, whether the string starts with the characters of a specified string or not. 
// Pass a string as your argument 
 
console.log("checking .endsWith =", agenda.endsWith("communities")); 
// It Returns Boolean, whether the string ends with the characters of a specified string or not. 
// Pass a string as your argument 
 
// 11. replace & replaceAll 
const simpleEssay = 
  "He was held at gunpoint at the bus-stop. Thank God the police interverned and he was safe. He is now at home"; 
 
console.log("checking .replace =", simpleEssay.replace("He", "2pac")); 
// It Returns a String which is Replaced specified value just once 
// Pass a searchString and ReplacementString as your argument 
console.log("\n"); 
console.log("checking .replaceAll =", simpleEssay.replaceAll("at", "with")); 
// It Returns a String which is Replaced specified value all occurences. 
// Pass a searchString and ReplacementString as your argument 
 
// 11. repeat 
const essayII = "She was held at gunpoint"; 
 
console.log("checking .repeat =", essayII.repeat(3)); 
// It Returns a String which is duplicated to the amount of times you passed in the argument 
// Pass a number as your argument 
 
// 12. indexof and lastIndexOf 
const welcome = 
  "Welcome service to NEXT Technology company, How can we be of service"; 
 
console.log("checking .indexOf =", welcome.indexOf("service")); 
// Returns the index of the first occurrence of the specified value. 
// Pass a string you want to check the index 
console.log("\n"); 
console.log("checking .lastIndexOf =", welcome.lastIndexOf("service")); 
// Returns the index of the last occurrence of the specified value. occurences. 
// Pass a string you want to check the index 
 
console.clear(); 
 
// 13. includes 
const finale = "This is where we will end our Js class today"; 
 
console.log("checking .includes =", finale.includes("where")); 
// Determines whether the string contains the characters of a specified string. Returns Boolean 
// Pass a string as your arguments






