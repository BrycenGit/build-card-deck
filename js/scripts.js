$(document).ready(function() {
  
  const clubs = " of clubs";
  const diamonds = " of diamonds"
  const hearts = " of hearts"
  const spades = " of spades"

  const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
  let allClubs = [];
  cards.forEach(function(element) {
      allClubs.push(element + clubs);
      console.log(allClubs);
      $("#list").append("<li>" + element + clubs + "</li>");
  });

  let allDiamonds = [];
  cards.forEach(function(element) {
      allClubs.push(element + diamonds);
      console.log(allClubs);
      $("#list").append("<li>" + element + diamonds + "</li>");
  });

  let allHearts = [];
  cards.forEach(function(element) {
      allClubs.push(element + hearts);
      console.log(allClubs);
      $("#list").append("<li>" + element + hearts + "</li>");
  });

  let allSpades = [];
  cards.forEach(function(element) {
      allClubs.push(element + spades);
      console.log(allClubs);
      $("#list").append("<li>" + element + spades + "</li>");
  });


  event.preventDefault();
});