
let person = {
  // name: 'Andrew',
  // job is not in object.
  age: 36,
  location: {
    city: 'Kiev',
    temperature: 25
  }
};

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




let book = {
  title: 'Hound',
  author: 'A. Doyle',
  pub: {
    // name: 'Punguin'
  }
};


let {name: publisherName = 'Self-Publisher'} = book.pub;
console.log(publisherName);
