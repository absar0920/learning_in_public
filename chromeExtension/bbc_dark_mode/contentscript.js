function createDarkMode() {
  console.log("Running...");
  let button = document.createElement("button");
  button.id = "bbc-dark-mode-button";
  button.innerHTML = "Toggle Dark Mode";
  button.addEventListener("click", toggleDarkMode);
  document.body.prepend(button);
}

function toggleDarkMode() {
  document.body.classList.toggle("bbc-dark-mode");
  console.log("Dark Mode toggled");
}
// start the script
createDarkMode();
