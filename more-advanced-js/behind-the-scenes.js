const hobbies = ["Sports", "Cooking"];

hobbies.push("Reading");

// hobbies = "Watching memes"; // -> TypeError: Assignment to constant variable.

console.log(hobbies);

hobbies.pop();
console.log(hobbies);

// Primitive values: numbers, strings, booleans, & undefined
// Reference values: Objects

const person = { age: 32 };
const person2 = { age: 32 };

function getAdultYearsAndChange(p) {
  p.age = p.age - 18;
  return p.age;
}

function getAdultYears(p) {
  return p.age - 18;
}

console.log(getAdultYearsAndChange(person));
console.log(person);
console.log("*****");
console.log(getAdultYears(person2));
console.log(person2);
console.log("*****");
console.log(getAdultYearsAndChange({ age: person2.age }));
console.log(getAdultYearsAndChange({ ...person2 }));
console.log(person2);
