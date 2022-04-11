let data = new Object();

data.name = 'Alee';
data.city = 'Lahore';
data.work = 'Dev';

// Get the hidden props

function getAllProps(o) {
    let discover = o;
    let props = [];

    while(discover !== null) {
        props = props.concat(Object.getOwnPropertyNames(discover));
        discover = Object.getPrototypeOf(discover);
    }

    return props;
}

console.log(getAllProps(data));