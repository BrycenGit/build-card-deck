$(document).ready(function() {
  
  const clubs = " of clubs";
  const diamonds = " of diamonds";
  const hearts = " of hearts";
  const spades = " of spades";
  // const cardType = [" of clubs", " of diamonds", " of hearts", " of spades"];
  const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
 
  
  // cards.forEach(function(element1) {
  //   cardType.forEach(function(element2) {
  //     $("#list").append("<li>" + element1 + element2 + "</li>");
  //   });
  // });
  cards.forEach(function(element) {
      $("#list").append("<li>" + element + clubs + "</li>");
  });
  
  cards.forEach(function(element) {
      $("#list").append("<li>" + element + diamonds + "</li>");
  });

  cards.forEach(function(element) {
      $("#list").append("<li>" + element + hearts + "</li>");
  });

  cards.forEach(function(element) {
      $("#list").append("<li>" + element + spades + "</li>");
  });
});
