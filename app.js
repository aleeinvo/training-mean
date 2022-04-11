// Arrays

let users = [
    'alee',
    'arslan',
    'usman',
    'numan',
    'asher'
];

console.log(users.filter((el) => {
    return el.startsWith('a');
}))