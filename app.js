const btn = document.getElementById('changeBg');

let count = 0;

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function changeBg() {
    const randColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

    document.body.style.backgroundColor = randColor;
}

btn.addEventListener('click', changeBg, {
    once: true
});