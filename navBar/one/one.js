// Select the button and the menu
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

// Add an event listener to the button
menuButton.addEventListener("click", () => {
  // Toggle the 'hidden' class on the menu div
  menu.classList.toggle("hidden");
});
