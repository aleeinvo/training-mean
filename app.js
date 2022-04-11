// Arrays

let users = [
    'alee',
    'arslan',
    'usman',
    'numan',
    'asher'
];

console.log(users.findIndex((el) => {
    return el.startsWith('a');
}))