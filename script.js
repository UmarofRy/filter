let a = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];

let qatnashgan = a.filter(b => b.includes('n'));
let qatnashmagan = a.filter(b => !b.includes('n'));

console.log("qatnnashgan 'n':",qatnashgan);
console.log("qatnashmagan 'n':", qatnashmagan);