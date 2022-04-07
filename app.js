// function constructor
const adder = new Function('x', 'y', 'return x + y;');

console.log(adder(4 , 5));