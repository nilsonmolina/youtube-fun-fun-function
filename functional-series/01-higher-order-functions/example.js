// Higher Order Functions are functions that take other functions as arguments.

// // here we see the basic function in it's natural habitat
// function triple(x) {
//     return x * 3;
// }

// // not all programming languages can do this - assign anonymous function to a variable
// var triple = function(x) {
//     return x * 3;
// }
// // and just like any variable, we can pass it around
// var waffle = triple;
// console.log(waffle(30));
// // so functions can be passed to other functions - higher order functions!

// -------------- FILTER --------------------
// filter is a function of the array that accepts another function as its argument, 
// that is used to return a new filtered version of the array

// var animals = [
//     { name: 'Fluffykins', species: 'rabbit' },
//     { name: 'Caro', species: 'dog' },
//     { name: 'Hamilton', species: 'dog' },
//     { name: 'Harold', species: 'fish' },
//     { name: 'Ursula', species: 'cat' },
//     { name: 'Jimmy', species: 'fish' }
// ];

// // PROBLEM: get only the dogs
// // with for loop:
// var dogs = [];
// for (let i = 0; i < animals.length; i++){
//     if (animals[i].species === 'dog'){
//         dogs.push(animals[i]);
//     }
// }
// console.log(dogs);
// // with filter:
// var dogsFilter = animals.filter(function(animal) {
//     return animal.species === 'dog';
// })
// console.log(dogsFilter);


// // we could also decouple the function and use it for different tasks
// var isDog = function(animal){
//     return animal.species === 'dog';
// }
// var dogs = animals.filter(isDog);
// console.log(dogs);


// -------------- MAP --------------------
// just like filter, map is a higher order function. Also like filter, it iterates
// through an array, but unlike filter, it does not throw the objects away, instead
// it transforms them

// var animals = [
//     { name: 'Fluffykins', species: 'rabbit' },
//     { name: 'Caro', species: 'dog' },
//     { name: 'Hamilton', species: 'dog' },
//     { name: 'Harold', species: 'fish' },
//     { name: 'Ursula', species: 'cat' },
//     { name: 'Jimmy', species: 'fish' }
// ];
// PROBLEM: get only the names of all the animals
// with for loop:
// var names = [];
// for (let i = 0; i < animals.length; i++) {
//     names.push(animals[i].name);
// }
// console.log(names);

// // with map:
// var names = animals.map(function(animal) {
//     return animal.name;
// });
// console.log(names);

// // and with ES6 we can write this even shorter
// var names = animals.map(x => x.name);

// // since map just expects the callback to return any object, we can use map to create completely new objects
// var names = animals.map(animal => animal.name + ' is a ' + animal.species);
// console.log(names);

// -------------- REDUCE --------------------
// before we continue, let us recap on what we have learned. map and filter transform a list into something else. map will
// take an array and transform it into an array of the same length, but with each individual item transformed. filter transforms
// an array into a smaller array. reduce is not very specific however.  it is the multitool of list transformations.

var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];
// // PROBLEM: summarize the amounts
// // with for:
// var total = 0;
// for (let i = 0; i < orders.length; i++) {
//     total += orders[i].amount;
// }
// console.log(total);

// with reduce:
var total = orders.reduce(function(sum, order) {
    return sum + order.amount;
}, 0);
console.log(total);

// and with ES6 we can write this even shorter
var total = orders.reduce((sum, order) => sum + order.amount, 0);