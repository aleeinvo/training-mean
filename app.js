// Booleans

let initial = ' ';

let go = Boolean(initial.trim());
go = false;
let goObj = new Boolean(initial.trim());

console.log('permitive', go.toString());
console.log('object', goObj.valueOf());

// All false values

var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean('');
var bfalse = new Boolean(false);