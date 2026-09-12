function hello() {
  var name = 'Genesis';
  console.log(name);
}

function hello2() {
  console.log(name);
  var name = 'Dave';
  // let name = 'Dave';
}

// hello();
// hello2(); // undefined because of hoisting

function doSomething() {
  // var a = 23;
  if (2 < 4) {
    let a = 22; // block scope
    // var a = 22; // function scope
    console.log(a);
  }
  // console.log(a); // error but still works with var
}

doSomething();
