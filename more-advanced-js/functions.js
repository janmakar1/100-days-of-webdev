function greetUser(greeting, userName = "user") {
  // userName - dafault parameter
  // console.log(greeting + " " + userName + "!");
  // the same as above but with template literals
  console.log(`${greeting} ${userName}!`);
}

greetUser("Hi", "Max");
greetUser("Hello");

function sumUp(...numbers) {
  // ... - rest operator
  let result = 0;

  for (const number of numbers) {
    result += number;
  }
  return result;
}

console.log(sumUp(1, 2, 3, 4, 5));
const inputNumbers = [1, 2, 3, 4, 5];
console.log(sumUp(inputNumbers)); // -> 01,2,3,4,5 - concatenating 0 from inside function with inputNumbers array
console.log(sumUp(...inputNumbers)); // ... here - spread operator
console.log(sumUp); // -> [Function: sumUp] - functions are objects
