const hourlyRate = 45.25;
const hoursWorked = 40;

const weeklyPay = hoursWorked * hourlyRate;
console.log('Your Weekly Gross Pay: $' + weeklyPay);

const overtimeHours = 10;
const totalHoursWorked = hoursWorked + overtimeHours;
console.log('Total Hours of Worked: ' + totalHoursWorked);

const overtimeRate = hourlyRate / 2.0 + hourlyRate;
console.log('Overtime Rate: ' + overtimeRate);

const totalOvertimePay = overtimeHours * overtimeRate;
console.log('Total Overtime Pay: ' + totalOvertimePay);

const totalWeeklyPay = weeklyPay + totalOvertimePay;
console.log('Total Weekly Pay: ' + totalWeeklyPay);

const TAX_MULTIPLIER = 0.33;
const totalTax = totalWeeklyPay * TAX_MULTIPLIER;
const totalNetPay = totalWeeklyPay - totalTax;
console.log('Total Net Pay: ' + totalNetPay);

console.log(5 + 4 * 8 - 2); // 35
console.log((5 + 4) * 8 - 2); // 70

let x = 5;
let y = 2;
console.log(x % y); // 1
