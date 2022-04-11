// Arrays

let users = [
    'alee',
    'arslan',
    'usman',
    'numan',
    'asher',
    'alee'
];

let numbers = [
    1,
    2,
    3,
    4,
    5
];

const inventory = [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
    { name: 'bananas', type: 'fruit', quantity: 0 },
    { name: 'goat', type: 'meat', quantity: 23 },
    { name: 'cherries', type: 'fruit', quantity: 5 },
    { name: 'fish', type: 'meat', quantity: 22 }
];

console.log(users.map(user => {
    return {
        name: user,
        city: 'lahore'
    };
}));