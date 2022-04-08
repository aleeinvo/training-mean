const btn = document.getElementById('changeBg');

let count = 0;

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function changeBg(){
    const randColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

    document.body.style.backgroundColor = randColor;

    count++;

    if(count >= 10) {
        btn.removeEventListener('mouseover', changeBg);
    }
}

btn.addEventListener('mouseover', changeBg);