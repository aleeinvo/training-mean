// Strings

String.prototype.last = function() {
    return this.charAt(this.length - 1);
}

String.prototype.first = function() {
    return this.charAt(0);
}

let dev = new String('aleedhillon\0');
let devPrim = 'aleedhillon';

console.log(typeof dev);
console.log(typeof devPrim);