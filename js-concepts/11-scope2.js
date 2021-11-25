function doSomething() {
  let y = 2;

  function somethingElse() {
    console.log(y);
    y = 3;
    let x = 2;
  }
  somethingElse();
  // console.log(x); // will not work
  // console.log(y); // 3
}
doSomething(); // 2
// somethingElse(); // will not work
