let data = new Object();

data.name = 'Alee';
data.city = 'Lahore';
data.work = 'Dev';

for(let prop of Object.keys(data)) {
    console.log(`${prop} => ${data[prop]}`); 
}