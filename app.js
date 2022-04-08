const btn = document.getElementById('changeBg');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener('click', () => {
    const randColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

    document.body.style.backgroundColor = randColor;
});