let userScore = 12.345;
let totalAmount = 78.9;
let discountRate = 0.123;

// strings
let priceTag = "value: 45.67";
let fruitinventory = "Amount: 123 apples";
//1
console.log(Number.isInteger(userScore));
console.log(Number.isInteger(totalAmount));
console.log(Number.isInteger(discountRate));
//2
console.log(userScore.toFixed(2));
//3
console.log(totalAmount.toString());
//4
let price = "45.67";
let extract = parseFloat(price);
console.log(extract);
//5 
 let inventory = "123"; 
let fruit = parseInt(inventory);
console.log(fruit);
//6
let addition = userScore + discountRate;
console.log(addition.toFixed(3));

let subtraction = totalAmount - discountRate;
console.log(subtraction.toFixed(1));




