let train = document.getElementById('train');

train.addEventListener('click', function(e) {
    let start = Date.now();

    let animation = setInterval(() => {
        let timePassed = Date.now() - start;

        if(timePassed > 6000) {
            clearInterval(animation);
            return;
        }

        train.style.left = timePassed / 5 + 'px';
    })
});