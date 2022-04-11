// Date

let date = new Date(1993, 8, 13, 0, 0, 0, 0);

const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];

console.log(year, month, day, hour, minutes, seconds);
