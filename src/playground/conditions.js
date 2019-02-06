// Conditions
let user = {
  name: 'Andrey',
  age: 36,
  location: 'Lincoln'
}

function getLocation(location){
  if(location){
    return <p>Location: { location }</p>;
  } else {
    return undefined;
  }
};

let templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    { (user.age && user.age > 19) && <p>Age: {user.age}</p>}
    { getLocation(user.location) }
  </div>
);