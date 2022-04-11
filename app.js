function Car(name, model) {
    this.name = name;
    this.model = model;

    this.run = (speed = 120) => {
        console.log(this.name +' is runing at ' + speed + ' by ' + this.owner);
    }
}

function Owner(name, city) {
    this.name = name;
    this.city = city;
}

let honda = new Car('Honda', 2008);
honda.owner = new Owner('Alee', 'Lahore');
console.log(honda);
honda.run(180);