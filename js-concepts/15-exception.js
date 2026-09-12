// console.log('Hello');
// console.someMethodThatDoesNotExist();
// console.log('World');

// try {
//   let name = 'Genesis';
//   console.log('Hello ');
//   console.log(name);
//   console.log('Do something else.'); // This will be skipped if name is not defined
// } catch (err) {
//   console.log('An error has occured.');
//   // console.log(err);
// } finally {
//   console.log('Done.'); // This will run no matter what
// }

function isEven(num) {
  if (parseInt(num) == NaN) {
    throw new Error('Passed in invalid string.');
  }

  // if (parseInt(num) != Number) {
  //   throw new Error('Not a number.');
  // }

  if (num % 2 != 0) {
    throw new Error('Not an even number');
  }

  return true;
}

try {
  let flag = isEven(5);
  // let flag = isEven('6');
  // let flag = isEven('Genesis');
  console.log(flag);
} catch (err) {
  console.log(err);
}
