// OBJECT DESTRUCTURING

// let person = {
  // name: 'Andrew',
  // job is not in object.
//   age: 36,
//   location: {
//     city: 'Kiev',
//     temperature: 25
//   }
// };

// let name = person.name;
// let age = person.age;


// Object Destruction
// let {name, age, location} = person;
// console.log(`Name: ${name}, age: ${age}`);


// let {city, temperature} = person.location;
// if(temperature && city){
//   console.log(`There is ${temperature} in ${city}`);
// }

// Destruct and rename local veriable
// let {city, temperature: temp} = person.location;
// if(temp && city){
//   console.log(`There is ${temp} in ${city}`);
// }

// Default values
// let {job = 'Driver', name = 'Anonymous', age: personAge} = person; // property jop set as default
// console.log(`Person ${name}, ${personAge}, ${job}`);

// let book = {
//   title: 'Hound',
//   author: 'A. Doyle',
//   pub: {
//     // name: 'Punguin'
//   }
// };

// let {name: publisherName = 'Self-Publisher'} = book.pub;
// console.log(publisherName);

// ====================================================================


//  ARRAYS DESTRUCTURING
// let address = [
//   'street 12345 Chicago',
//   'Philadelphia',
//   'Pennsylvania',
//   '14799'
// ];
// let address = [];

// Matching by position
// let [street, city, state, zip] = address;

// Skip 0 index
// let [, city, state, zip] = address;

// Default naming
// let [state = 'Default State'] = address;

// console.log(`City: ${address[1]}, State:${address[2]}`);
// console.log(`City: ${city}, State:${state}`);
// console.log(`State:${state}`);


let coffee = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];
let   [drink] = coffee;
let   [, , mediumCoffeePrice] = coffee;
let   [, , , largeCoffeePrice] = coffee;
console.log(`Medium ${drink} costs ${mediumCoffeePrice}`);
console.log(`Large ${drink} costs ${largeCoffeePrice}`);




