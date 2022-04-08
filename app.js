let refresh = document.getElementById('refresh');

refresh.addEventListener('click', () => {
    location.reload();
})

function refreshPage() {
    location.reload();
}

let time = document.getElementById('time');

time.innerText = (new Date).toISOString();

setInterval(refreshPage, 1000);