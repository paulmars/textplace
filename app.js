var logDebug = true

var text =  [
  "Hey",
  "The",
  "Location",
  "is",
  "Slide",
  "ranch",
  "But",
  "dont",
  "drive",
  "there",
  "Drive",
  "to",
  "holiday",
  "inn",
  "express",
  "Shuttles",
  "run",
  "every",
  "30",
  "minutes",
  "4pm",
  "to",
  "10pm",
  "It",
"is", "on", "a", "ranch,", "there", "are", "no", "sidewalks.", "Heels", "are", "a", "bad", "idea.", "We", "have", "two", "hotel", "blocks", "Cheaper", "with", "a", "code", "it", "is", "45", "minutes", "away", "from", "SF", "so", "maybe", "carpool", "Thanks!"]


pushNewWord = function() {
  $("#text").text(text.shift());
}

setInterval(function(){
  pushNewWord();
}, 200);

