import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


{/* <Route path component/> */}

const ExpendsDashboardPage = ()=> (<div>!!!!This is from ExpendsDashboardPage!!!</div>);  
const AddExpendsPage = ()=> (<div>AddExpendsPage</div>);  
const EditExpendsPage = ()=> (<div>EditExpendsPage</div>);  
const HelpExpendsPage = ()=> (<div>HelpExpendsPage</div>);  

/**exact={true} only matches*/

const routes = (
  <BrowserRouter>
    <div>
      <Route path='/' component={ExpendsDashboardPage} exact={true}/> 
      <Route path='/create' component={AddExpendsPage} />
      <Route path='/edit' component={EditExpendsPage} />
      <Route path='/help' component={HelpExpendsPage} />
    </div>
  </BrowserRouter>
);
      
ReactDOM.render(routes, document.getElementById('app'));
