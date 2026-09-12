var firstName = 'Genesis';

function sendMessage(firstName) {
  console.log('Hello ' + firstName);
}

sendMessage(firstName);

function displayName() {
  console.log('Your name is: ' + firstName);

  function doSomething() {
    console.log(firstName);
    let x = 2;

    doSomethingElse();
    function doSomethingElse() {
      console.log(x);
    }
  }
  doSomething();
}

displayName();
