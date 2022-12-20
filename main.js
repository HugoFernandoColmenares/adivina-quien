// Get all the cards
var cards = document.querySelectorAll(".card");

// Add a click event listener to each card
cards.forEach(function(card) {
  card.addEventListener("click", function() {
    // Toggle the "gray" class on the card
    card.classList.toggle("gray");
  });
});