let userName = "Max";
let age = 32;
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "New York",
  salary: 50000,
};
console.log(`Hi, my name is ${userName}, I am ${age} years old, I work 
as ${job.title} in ${job.place} (earning ${job.salary}$!). 
I love ${hobbies} in my free time.`);

let totalAdultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

let person = {
  name: "Max",
  greet() {
    console.log("Hello");
  },
};

person.greet();
