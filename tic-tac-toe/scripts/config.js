function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
}

function savePlayerConfig(event) {
  console.log(event);
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(formData);
  const enteredPlayername = formData.get("playername").trim();
  console.log(enteredPlayername);

  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }

  player1PlaceholderElement.textContent = enteredPlayername;
}
