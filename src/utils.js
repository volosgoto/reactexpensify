// exports - single default export - named export
function square(x) {
  return x * x;
}
function sum(a, b){
  return a + b;
}
// export{ square, sum } // !!! NOT OBJECT DEFINITION

// default export
let subtract = (a, b)=>{
  return a - b;
};

// export default subtract;
// export default (a, b) => a - b;

export{ square, sum, subtract as default};
