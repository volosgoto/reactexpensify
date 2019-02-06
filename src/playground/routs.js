import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


{/* <Route path component/> */}

const ExpendsDashboardPage = ()=> (<div>!!!!This is from ExpendsDashboardPage!!!</div>);  
const AddExpendsPage = ()=> (<div>AddExpendsPage</div>);  
const EditExpendsPage = ()=> (<div>EditExpendsPage</div>);  
const HelpExpendsPage = ()=> (<div>HelpExpendsPage</div>);  
const NotFoundPage = ()=> (
  <div>
    404. NotFoundPage
    {/* <a href="/">Go home</a> */}
    <Link to="">Go home</Link>
  </div>
);  
const Header = ()=>(
  <header>
    <h1>Expensify</h1>
      {/* <Link to='/'>Home</Link>
      <Link to='/create'>Add</Link>
      <Link to='/edit'>Edit</Link>
      <Link to='/help'>Help</Link> */}
      <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>
      <NavLink to='/create' activeClassName='is-active'>Add</NavLink>
      <NavLink to='/edit' activeClassName='is-active'>Edit</NavLink>
      <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
  </header>
);

/**exact={true} only matches*/
// Switch for routs that aren't defined

const routes = (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path='/' component={ExpendsDashboardPage} exact={true}/> 
        <Route path='/create' component={AddExpendsPage} />
        <Route path='/edit' component={EditExpendsPage} />
        <Route path='/help' component={HelpExpendsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
      
ReactDOM.render(routes, document.getElementById('app'));
