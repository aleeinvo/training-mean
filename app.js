var singleLetterWord = /\b\w\b/g;
var notSoLongWord = /\b\w{1,6}\b/g;
var loooongWord = /\b\w{13,}\b/g;

var sentence = "Why do I have to learn multiplication table?";

console.table(sentence.match(singleLetterWord)); // ["I"]
console.table(sentence.match(notSoLongWord));    // [ "Why", "do", "I", "have", "to", "learn", "table" ]
console.table(sentence.match(loooongWord));      // ["multiplication"]