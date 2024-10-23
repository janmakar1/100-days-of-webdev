const name = "Max";
if (name == "Max") {
  console.log("Hello Max!");
} else {
  console.log("I don't know you!");
}

console.log(5 !== 5);
console.log(4 !== 5);
console.log(5 !== "5");
console.log(5 != "5");
console.log(3 > 1);
console.log(4 > 1);
console.log("a" > "b");
console.log("cb" > "ab");

// more on boolean values
let isUserLogged = false;
if (!isUserLogged) {
  console.log("User is NOT logged.");
}

// truthy & false values
let enteredUserName = "Marks";

if (enteredUserName) {
  console.log("Input is valid!");
} else {
  console.log("Input is INVALID!");
}
