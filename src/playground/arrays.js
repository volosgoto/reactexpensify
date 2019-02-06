// Arrays
// -------------------------------------------------
let app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of computer',
  options: []
};

let onFormSubmit = (event) => {
  event.preventDefault();
  const option = event.target.elements.option.value; //string of input where option is name in option field
  if (option) {
    app.options.push(option);
    event.target.elements.option.value = '';  // clear input field
    render();
  }
};

let onRemoveAll = () => {
  if (app.options.length > 0) {
    app.options = [];
  };
  render();
};


let appRoot = document.getElementById('app') // div id="root"


let numbers = [55, 101, 1000];
// let list = numbers.map((elem)=>{
//   return'<li>' + elem+ '</li>'; // Mutating arry with JSX syntax
// })
// console.log(list);


function render() {
  let template = (<div>
    <h1> {app.title} </h1>
    {app.subtitle && <p> {app.subtitle} </p>}
    <p> {app.options.length > 0 ? 'Here your options' : 'No options'} </p>
    <p>{app.options.length}</p>
    <button onClick={onRemoveAll}>Remove all</button>
    {/* {
      [
        <p key="1">a</p>,
        <p key="2">b</p>,
        <p key="3">c</p>,
      ]
    } */}
    {/* {
      [
        numbers.map((elem)=>{
          return <p key={elem}>Number: {elem}</p>
        })
      ]
    } */}
    <ol>
      {
        app.options.map((elem)=>{
          return <li key={elem}>{elem}</li>
        })
      }
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
      <button type="submit">Add option</button>
    </form>
  </div>
  );
  
  ReactDOM.render(template, appRoot);  
}

render();