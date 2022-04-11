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

for(let [key, value] of users.entries()) {
    console.log(`${key} => ${value}`);
}