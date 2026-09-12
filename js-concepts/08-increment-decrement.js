let hoursWorked = 0;
hoursWorked = hoursWorked + 1;
hoursWorked += 1;
hoursWorked++; // Postfix Mode
++hoursWorked; // Prefix Mode
console.log('Hours of worked: ' + hoursWorked);

let gallons = 10;

gallons = gallons - 1;
gallons -= 1;
gallons--;
console.log('Gallons: ' + gallons);

let y = 5;
let result;
// result = y++ * 5 + 10; // 6, 35
// result = ++y * 5 + 10; // 6, 40

// result = y-- * 5 + 10; // 4, 35
result = --y * 5 + 10; // 4, 30

console.log('y: ' + y, 'Result: ' + result);
