const MAX_LENGTH = 60;
const remainingCharactersElement = document.getElementById("remaining-chars");
const inputElement = document.getElementById("product-name");

function inputPassed(event) {
  const enteredTextLength = event.target.value.length;
  const remainingCharacters = MAX_LENGTH - enteredTextLength;
  remainingCharactersElement.textContent = remainingCharacters;

  if (remainingCharacters < 10) {
    remainingCharactersElement.classList += "warning";
    inputElement.classList += "warning";
  } else {
    remainingCharacters.classList = [];
    inputElement.classList = [];
  }
}

inputElement.addEventListener("input", inputPassed);

// TODO: check the solution
