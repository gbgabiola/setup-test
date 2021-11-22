/**
 * Condition #1 - If age is greater than or equal to 18
 * Condition #2 - If age is less than or equal to minimum age
 *
 * If condition #1 AND condition #2... then print "Valid"
 */

const age = 18;
const minAge = 21;

if (age >= 18 && age <= minAge) {
  console.log('Valid');
} else {
  console.log('Not valid');
}

/**
 * Condition #1 - If it is sunny
 * Condition #2 - If it is not at least 70 degrees
 *
 * If condition #1 OR condition #2... then we will go to the park
 */

let isSunny = true;
let isWarm = false;

if (isSunny || isWarm) {
  console.log('We will go to the park.');
} else {
  console.log('Too hot, maybe next time.');
}
