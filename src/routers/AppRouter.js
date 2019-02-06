import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';
import AddExpendsPage from '../components/Header';
import EditExpendsPage from '../components/Header';
import ExpendsDashboardPage from '../components/Header';
import HelpExpendsPage from '../components/Header';
import NotFoundPage from '../components/Header';

const AppRouter = ()=>(
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

export default AppRouter;