// console.log(Math.sqrt(9));
// console.log(Math.pow(2, 3));

let x1 = 3;
let y1 = 5; // (3, 5)

let x2 = 7;
let y2 = 8; // (7, 8)

let deltaX = Math.pow(x2 - x1, 2);
let deltaY = Math.pow(y2 - y1, 2);
console.log('Delta X: ' + deltaX, 'Delta Y:' + deltaY);

let sum = deltaX + deltaY;
console.log('Sum: ' + sum);

let distance = Math.sqrt(sum);
console.log('Distance: ' + distance);

console.log('SIN: ' + Math.sin(360));
console.log('TAN: ' + Math.tan(360));

console.log('Random number: ' + Math.round(Math.random() * 100));

console.log('PI: ' + Math.PI);
console.log('E: ' + Math.E);
