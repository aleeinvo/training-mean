// Date

function doSomething() {
    return Array.from({ length: 100000 })
        .fill(100)
        .map(v => {
            return v * v;
        })
        .reduce((prev, current) => {
            return prev + current
        });
}

const iterations = 1000;
let result = [];

for (let i = 1; i <= iterations; i++) {
    const start = performance.now();
    doSomething();
    const end = performance.now();

    result.push(end - start);
}

let avg = result.reduce((prev, current) => {
    return prev + current
}) / iterations;
console.log(`it took avg ${avg} miliseconds`);