let value = null;

value = void (4 + 5);

console.log(value);

// run this function immeditly
void function something() {
    console.log('something');
}();

let doSomething = document.getElementById('refresh');

function doSomethingFunc() {
    console.log('We are doing something');

    return true;
}

doSomething.onclick = () => void doSomethingFunc();