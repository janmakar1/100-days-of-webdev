function paragraphClicked() {
  paragraphElement.textContent = "CLICKED!";
}

function retrieveUserInput(event) {
  let enteredText = event.target.value;
  let enteredText2 = event.data;

  // console.log(inputElement.value);
  // console.log(event);
  console.log(enteredText);
  console.log(enteredText2); // only one character - or null if backspace
}

let paragraphElement = document.querySelector("p");
paragraphElement.addEventListener("click", paragraphClicked);

let inputElement = document.querySelector("input");
inputElement.addEventListener("input", retrieveUserInput);
