function getNameUpper(name) {
    return function () {
        return name.toUpperCase();
    }
}

let upperFunc = getNameUpper('alee');

console.log(upperFunc());