// Math

// console.log(Math.pow(2, 11));

function randomNumber(min = 0, max = 1000)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function removeIfFound(range, n) {
    let index = range.findIndex(x => {
        return x === n;
    });

    if(index >= 0) {
        range.splice(index, 1);
    }

    return range;
}

let min = 0;
let max = 100;

let range = [];
for(let i = min; i < max; i++) {
    range.push(i);
}

let start = performance.now();

let randCheck = setInterval(() => {
    console.clear();
    let rand = randomNumber(min, max);
    console.log('Random:', rand);

    range = removeIfFound(range, rand);

    let time = performance.now() - start;

    console.log(`Time: ${time}`);
    console.log('Range Count:', range.length);
    console.log('Range:', range);

    if(!range.length) {
        clearInterval(randCheck);
        console.log('Done, all numbers have been generated.');

        console.log(`it took ${time} miliseconds`);
    }
}, 100);