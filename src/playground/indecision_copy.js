// React.Component require to implement method render()
// let obj = {
//   name:'Victor',
//   getName(){
//     return this.name;
//   }
// };
// // console.log('obj.getName()', obj.getName());
// // let getName = obj.getName.bind(obj);
// let getName = obj.getName.bind();
// console.log(obj.getName.bind({name: 'S'}));

class IdecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.state = {
      options : ["Thing 1", "Thing 2", "Thing 4"],
    };
  }

  handleDeleteOptions(){
    console.log('handleDeleteOptions');
    
    this.setState(()=>{
      return {
        options: []
      };
    });
  }
  
  render() {
    let title = "Indecision";
    let subtitle = "Put your life in the hands of computer!";

    return (
      <div>
        {/* <Header title="Title test value" info="Test Info"/> */}
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options > 0}/>
        <Options 
          options={this.state.options}
          handleAddOptions = {this.handleAddOptions}
        />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    // console.log(this.props);
    // return (<p>This is from header</p>);
    return (
      <div>
        {/* <h1>Indecision</h1> */}
        <h1>{this.props.title}</h1>
        {/* <h2>Put your life in the hands of computer</h2> */}
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handlePick");
  }
  render() {
    return (
      <div>
        <button 
          onClick={this.handlePick}
          disabled={this.props.hasOptions}
        >
        What should i do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleRemoveAll = this.handleRemoveAll.bind(this); // bind the right context from props
  // }

  // handleRemoveAll() {
  //   console.log(this.props.options); // udefined. Context is brocken. To fix that you should add a constructor().
  // }

  render() {
    // only render() has right context from props
    return (
      <div>
        {/* <button onClick={ this.handleRemoveAll.bind(this) }>Remove all</button> */}
        {/* <button onClick={this.handleRemoveAll}>Remove all</button> */}
        <button onClick={this.props.handleDeleteOptions}>Remove all</button>
        <p>Option length: {this.props.options.length}</p>
        {/* { this.props.options.map((option) => <p key={option}>{option}</p>) } */}
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))
        }
        {/* <Option /> */}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    // console.log(this.props);
    return <div>Option: {this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    console.log("handleAddOption", this);

    e.preventDefault();
    const option = e.target.elements.option.value;
    option.trim();
    if (option) {
      alert("form");
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}


let root = document.getElementById("app");
ReactDOM.render(<IdecisionApp />, root);
