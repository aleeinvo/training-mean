// Arrays

let users = [
    'alee',
    'arslan',
    'usman',
    'numan',
    'asher'
];

let moreUsers = [
    'kirla',
    'bhalo',
    'khan',
    'ubbaid'
];

console.log(users.every((el) => {
    return (typeof el) == 'string';
}));