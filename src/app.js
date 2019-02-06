import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


{/* <Route path component/> */}

const ExpendsDashboardPage = ()=> (<div>!!!!This is from ExpendsDashboardPage!!!</div>);  
const AddExpendsPage = ()=> (<div>AddExpendsPage</div>);  
const EditExpendsPage = ()=> (<div>EditExpendsPage</div>);  
const HelpExpendsPage = ()=> (<div>HelpExpendsPage</div>);  
const NotFoundPage = ()=> (<div>404. NotFoundPage</div>);  

/**exact={true} only matches*/
// Switch for routs thet aren't defined

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ExpendsDashboardPage} exact={true}/> 
      <Route path='/create' component={AddExpendsPage} />
      <Route path='/edit' component={EditExpendsPage} />
      <Route path='/help' component={HelpExpendsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
      
ReactDOM.render(routes, document.getElementById('app'));
