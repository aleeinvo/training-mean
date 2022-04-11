// Arrays

let users = [
    'alee',
    'arslan',
    'usman',
    'numan',
    'asher'
];

console.log(users.find((el) => {
    return el.startsWith('a');
}))