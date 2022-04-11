let data = new Object();

data.name = 'Alee';
data.city = 'Lahore';
data.work = 'Dev';

let obj = {
    name: 'unlock'
};

data[Math.random()] = 'Here is something';

for(let prop in data) {
    console.log(`${prop} => ${data[prop]}`);
}