function rand() {
    return Math.floor(Math.random() * 256);
}

function randColor() {
    return `rgb(${rand()}, ${rand()}, ${rand()})`;
}

let container = document.getElementById('container');

container.addEventListener('click', e => {
    e.target.style.backgroundColor = randColor();
});