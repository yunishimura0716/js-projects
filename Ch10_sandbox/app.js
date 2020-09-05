// iterator
// function nameIterator(names) {
//     let nextIndex = 0;

//     return {
//         next: function() {
//             return nextIndex < names.length ?
//             {
//                 value: names[nextIndex++], done: false
//             } : {
//                 done: true
//             }
//         }
//     }
// }

// const namesArr = ['Jack', 'Jill', 'John']

// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);


// generator

// function* sayNames() {
//     yield 'Jack';
//     yield 'Jill';
//     yield 'John';
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);


// CREATE SYMBOL
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// // console.log(typeof sym2);

// // unique object keys
// const KEY1 = Symbol();
// const KEY2 = Symbol('sym2');

// const myObj = {};

// myObj[KEY1] = 'Prop1';
// myObj[KEY2] = 'Prop2';

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// symbols are not enurmerable in for ...in
// symbols are ignored by Json.stringify

//Destructuring Assignment
// let a, b;
// [a, b] = [100, 200];
// //rest pattern
// [a, b, ...rest] = [100, 200, 300, 400, 500];

// ({a, b} = {a: 100, b:200, c:300, d:400, e:500});
// ({a, b, ...rest} = {a: 100, b:200, c:300, d:400, e:500});
// console.log(rest);

// const people = [1, 3, 4];
// const [person1, person2, person3] = people;
// console.log(person1);
// console.log(person2);
// console.log(person3);

// const person = {
//     name: 'Yu',
//     age: 21,
//     city: 'Miami',
//     gender:'Male',
//     sayHello: function() {
//         console.log('Hello');
//     }
// }
// const {name, age, city, sayHello} = person;
// console.log(name, age, city);

// sayHello();