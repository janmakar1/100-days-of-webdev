const MAX_LENGTH = 60;
const remainingCharactersElement = document.getElementById("remaining-chars");
const inputElement = document.getElementById("product-name");

function inputPassed(event) {
  const enteredTextLength = event.target.value.length;
  const remainingCharacters = MAX_LENGTH - enteredTextLength;
  remainingCharactersElement.textContent = remainingCharacters;

  if (remainingCharacters === 0) {
    remainingCharactersElement.classList.add("error");
    inputElement.classList.add("error");
  } else if (remainingCharacters <= 10) {
    remainingCharactersElement.classList.remove("error");
    inputElement.classList.remove("error");
    remainingCharactersElement.classList.add("warning");
    inputElement.classList.add("warning");
  } else {
    remainingCharactersElement.classList.remove("error", "warning");
    inputElement.classList.remove("error", "warning");
  }
}

inputElement.addEventListener("input", inputPassed);

// TODO: check the solution
