const people = [
  { name: "alice", hobbies: ["reading", "swimming", "hiking"] },
  { name: "bob", hobbies: ["cycling", "movies", "gaming"] },
  { name: "charlie", hobbies: ["writing", "chess", "dancing"] },
];
// .**Question: You have an array of people objects, each containing an array of hobbies. Write a function that returns a random person along with one of their hobbies.

// 1;
const peoplesHobby = () => {
  const randomPersonIndex = Math.floor(Math.random() * people.length);
  const selectedPerson = people[randomPersonIndex];

  const randomHobbyIndex = Math.floor(
    Math.random() * selectedPerson.hobbies.length
  );
  const randomHobby = selectedPerson.hobbies[randomHobbyIndex];
  return {
    name: selectedPerson.name,
    hobby: randomHobby,
  };
};

console.log(1, peoplesHobby());

// 2

const products = {
  electronics: ["laptop", "phone", "tablet"],
  clothing: ["shirt", "pants", "jacket"],
  groceries: ["milk", "eggs", "bread"],
};
// Question: you have an object where each key is a product category,and the value is an array of product names.write a function that randomly selcect one product from a category.
// const myproducts = Object.keys(products);
// const randonProducts = Math.floor(Math.random() * products.length);
// const theproduct = products[randonProducts];
// const myproduct = products[theproduct];
// const random = Math.floor(Math.random() * myproduct.length);
// const getProduct = myproduct[random];

// console.log(getProduct);

//3
const employees = [
  { name: "john", tasks: ["meeting", "coding", "review"] },
  { name: "sarah", tasks: ["design", "testing", "report"] },
  { name: "david", tasks: ["analysis", "documentation", "planning"] },
];
const getEmployeesTask = () => {
  const EmployeesTask = Math.floor(Math.random() * employees.length);
  const employee = employees[EmployeesTask];

  const randomTaskIndex = Math.floor(Math.random() * employee.tasks.length);
  const randomTask = employee.tasks[randomTaskIndex];
  return {
    employee: employee.name,
    tasks: randomTask,
  };
};
console.log(getEmployeesTask());
//4
const foodCategories = [
  { category: "fruit", items: ["apple", "banana", "grapes"] },
  { category: "vegetables", items: ["carrot", "brocoli", "spinach"] },
  { category: "dairy", items: ["milk", "cheese", "youghurt"] },
];
const getfoodItem = () => {
  const food = Math.floor(Math.random() * foodCategories.length);
  const selcectedFood = foodCategories[food];

  const randomFoodIndex = Math.floor(
    Math.random() * selcectedFood.items.length
  );
  const randomItem = selcectedFood.items[randomFoodIndex];
  return {
    category: selcectedFood.category,
    item: randomItem,
  };
};
console.log(getfoodItem());
