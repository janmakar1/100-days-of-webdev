for (let i = 0; i < 10; i++) {
  console.log(i);
}

let arr = ["Joel", "Mario", "Sigmund"];
for (const a of arr) {
  // can be let, of course.
  console.log("Hello " + a);
}

const loggedInUser = {
  name: "Max",
  age: 32,
  isAdmin: true,
};

for (prop in loggedInUser) {
  console.log(loggedInUser[prop]);
}

let isFinished = false;
while (!isFinished) {
  isFinished = confirm("Do you want to exit te program?");
}
