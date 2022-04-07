outer:
for(let x = 0;x <= 10; x++) {
    inner:
    for(let y =0;y <= 10; y++) {
        console.log(y);
        if(y == 5) {
            console.log('---------------------------------');
            break inner;
        }
    }
}