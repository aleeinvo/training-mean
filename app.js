// Math

console.log(Math.clz32(1));

console.log(Math.exp(99));

console.log(Math.expm1(99));

console.log(Math.floor(4.989));

console.log(Math.fround(4.889));

console.log(Math.fround(1.2));

console.log(Math.hypot(40, 2));

console.log(Math.imul(3, 4));

let numbers = [
    34,
    45,
    98765,
    23,
    565,
    3456,
    7887
];

console.log(Math.max(...numbers));

// or 

let max = numbers.reduce((prev, current) => {
    return Math.max(prev, current);
}, -Infinity);

let min = numbers.reduce((prev, current) => {
    return Math.min(prev, current);
}, Infinity);

console.log(max);