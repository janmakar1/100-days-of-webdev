// const job = {
//   title: "Developer",
//   location: "New York",
//   salary: 50000,
// };

const assert = require("assert");

console.log(new Date().toISOString());

// const job2 = {
//   title: "Cook",
//   location: "Munich",
//   salary: 45000,
// };

class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }

  describe() {
    console.log(
      `I'm ${this.title}, I work in ${this.location} and I earn ${this.salary}`
    );
  }
}

const developer = new Job("developer", "New York", 50_000);
const cook = new Job("cook", "Munich", 35000);

console.log(developer);
developer.describe();
cook.describe();

cook.restaurant = "McDonald"; // you can add new properties after initialization
console.log(cook);

console.log("______________");

input = ["Max", "Schwarchmuller"];
const firstName = input[0];
const lastName = input[1];
const [first, last] = input;
assert(first == firstName);
assert(last == lastName);

const { title: jobTitle } = developer;
console.log("I am a " + jobTitle + "!");
