// Arrays

let users = [
    'alee',
    'arslan',
    'usman',
    'numan',
    'asher',
    [
        'kirla',
        'bhalo',
        'someone',
        [
            'awais',
            'joiya'
        ]
    ]
];

let numbers = [
    1,
    2,
    3,
    4,
    5
];

console.log(numbers.flatMap((el) => {
    return [el, el * 2];
}));