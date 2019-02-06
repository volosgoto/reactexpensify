// Variables in JSX
let user = {
  name: 'Andrey',
  age: 36,
  location: 'Lincoln'
}

// From Babel
// var template = React.createElement(
//   "p",
//   { id: "someid" },
//   "Something new"
// );


/* 
JSX supports:
  strings
  numbers
  arrays
*/
/* 
JSX ignores, they don't shows up. But they can steel be used, but they newer shows:
  objects
  booleans
  undefined
  null
*/


// let userName = 'Andrey';
// let userAge = 30;
// let userLocation = 'Lincoln';
// {} any Javascript expression inside
// {{<p>123</p>}} any JSX inside JSX 
// {[{<p>123</p>}, {<p>hello</p>}]} any array of JSX, inside JSX 
// {} and any JSX expression inside
// {} and 'undefined', 'null', 'boolean' are ignored by JSX





let templateTwo = (
  <div>
    {/* <h1>{ alert('Hello')}</h1> */}
    {/* <h1>{ userName}</h1> */}
    <h1>{user.name.toUpperCase() + '!'}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);
