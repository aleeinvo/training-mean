function Car(name, model) {
    this.name = name;
    this.model = model;

    this.run = (speed = 120) => {
        console.log(this.name +' is runing at ' + speed + '...........');
    }
}

let honda = new Car('Honda', 2008);
honda.run(180);