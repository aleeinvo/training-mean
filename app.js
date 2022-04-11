function Owner(name) {
    this.name = name;
}

function Car(name) {
    this.name = name;

    Object.defineProperties(this ,{
        owner: {
            set: function(name) {
                this._owner = new Owner(name);
            },
            get: function() {
                return this._owner;
            },
        },
    });
}

Car.prototype.toString = function() {
    return JSON.stringify({
        name: this.name,
        owner: this.owner
    });
}

let honda = new Car('Honda');
honda.owner = 'Alee';

console.log(honda + '');