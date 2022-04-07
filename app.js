let people = {
    'Usman': 25,
    'Alee': 28,
    'Faizan': 17,
    'Rumman': 16,
    'Arslan': 29
};

function sortByKeys(data){
    return Object.keys(data).sort().map((key) => {
        return data[key];
    });
}

console.log(sortByKeys(people));