class User {
    constructor(name) {
        this.name = name;
    }

    whoIs() {
        console.log(this.name + ' is here.');
    }
}

class Admin extends User {

    whoIs() {
        console.log('admin');
        super.whoIs();
    }
    accessAll() {
        console.log('can access whole system');
    }
}

let myAdmin = new Admin('Alee');

console.log(myAdmin);

myAdmin.whoIs();