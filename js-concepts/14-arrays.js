let items = ['Genesis', undefined, null, 28, true, false, {}, function () {}];

// let names = ['Genesis', 'David', 'Kisses', 'Jemuel', 'Moises', 'Jesh'];
let names = [];

console.log(names);
names.push('Genesis');
console.log(names);
names.push('Jemuel');
console.log(names);
names.push('Kisses');
console.log(names);
names.unshift('David');
console.log(names);

names.splice(2, 0, 'Aronn');
console.log(names);

names.splice(4, 0, 'Rodel');
console.log(names);

names.splice(4, 1);
console.log(names);

names[1] = 'G';
console.log(names);

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// console.log(names.length);
// console.log(names[names.length - 1]); // Gets the last item
