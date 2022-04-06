let todayEl = document.getElementById('today');

setInterval(() => {
    todayEl.innerHTML = (new Date).toLocaleTimeString();
}, 1000);