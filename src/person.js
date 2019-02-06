
let isAdult = (age)=>{
  return (age >=18) ? true : false;
};

let canDrink = (isAdult)=>{
  return isAdult(15) ? 'yes' : 'no';
};

              let isSenior = (age)=> age > 65;
export default isSenior;
export { isAdult, canDrink };
