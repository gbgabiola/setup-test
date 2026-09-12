// let name = 'Genesis';
// let age = 28;
// let gender = 'Male';
// let favoriteFood = 'Sinigang';
// let favoriteDrink = 'Water';

// let person = {
//   name: 'Genesis',
//   age: 28,
//   gender: 'Male',
//   favoriteFood: 'Sinigang',
//   favoriteDrink: 'Water',
//   talk: function () {
//     console.log('Hello!');
//   },
// };

let car = {
  make: 'Honda',
  model: 'Civic',
  year: 2020,
  start: function () {
    console.log(
      'The ' +
        this.make +
        ' ' +
        this.model +
        ' ' +
        this.year +
        ' has started...'
    );
  },
};

// console.log(car.make);
// console.log(car['model']);
// console.log(car.year);
// console.log(car['start']()); // returns undefined
car.start();

// car.make = 'Hyundai';
// car['model'] = 'Elantra';
// car.year = 2021;

// car.mileage = 150000;

// delete car.mileage;
// console.log(car);

function Person(name, age, gender, weight, height) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.weight = weight;
  this.height = height;
  this.display = function () {
    console.log(this);
  };
}

let person1 = new Person('Genesis', 28, 'Male', 115, 64.8);
// console.log(person1);
person1.display();
