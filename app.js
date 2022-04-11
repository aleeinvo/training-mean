const User = {
    name: null,
    email: null,
    display: function() {
        console.log(this.name);
    }
}

let alee = Object.create(User);
alee.name = 'Alee Dhillon';
alee.email = 'aleedhillon@gmail.com';

console.log(alee);