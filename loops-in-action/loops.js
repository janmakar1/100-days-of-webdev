// for
const calculateSumButton = document.querySelector("button");

function calculateSum() {
  const userNumberInputElement = document.getElementById("user-number");
  const userNumber = userNumberInputElement.value;
  let calculatedSum = 0;
  for (let i = 0; i <= userNumber; i++) {
    calculatedSum += i;
  }
  const calculatedSumElement = document.getElementById("calculated-sum");
  calculatedSumElement.innerText = calculatedSum;
  calculatedSumElement.style.display = "block";
}

calculateSumButton.addEventListener("click", calculateSum);

// for-of
const highlightLinksButton = document.querySelector("#highlight-links button");
function highlightLinks() {
  const links = document.querySelectorAll("#highlight-links a");
  for (let link of links) {
    link.classList += "highlight";
  }
}
highlightLinksButton.addEventListener("click", highlightLinks);

// for-in
const dummyUserData = {
  firstName: "Max",
  lastName: "Blackmiller",
  age: 32,
};

const displayUserDataButtonElement =
  document.querySelector("#user-data button");

function displayUserData() {
  const userDataListElement = document.querySelector("#output-user-data");

  userDataListElement.innerHTML = "";

  for (const key in dummyUserData) {
    const newListElement = document.createElement("li");
    const newListElementText = key.toUpperCase() + ": " + dummyUserData[key];
    newListElement.textContent = newListElementText;
    userDataListElement.appendChild(newListElement);
  }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);

// while - Statistics / Roll the Dice

const rollDiceButtonElement = document.querySelector("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function deriveNumberOFDiceRolls() {
  const targetNumberInputElement =
    document.getElementById("user-target-number");
  const diceRollsListElement = document.getElementById("dice-rolls");

  const enteredNumber = targetNumberInputElement.value;
  diceRollsListElement.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;
  while (!hasRolledTargetNumber) {
    const rollledNumber = rollDice();
    // if (rollledNumber == enteredNumber) {
    //   hasRolledTargetNumber = true;
    // }
    numberOfRolls++;
    const newRollsListItemElement = document.createElement("li");
    const outputText = "Roll" + numberOfRolls + ": " + rollledNumber;
    newRollsListItemElement.textContent = outputText;
    diceRollsListElement.append(newRollsListItemElement);
    hasRolledTargetNumber = rollledNumber == enteredNumber;
  }
  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTargetNumberElement = document.getElementById(
    "output-target-number"
  );

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener("click", deriveNumberOFDiceRolls);
