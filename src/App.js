import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BudgetBuilder from './containers/BudgetBuilder/BudgetBuilder';
import Budgets from './containers/Budgets/Budgets';
// import cssClasses from './App.module.css';

class App extends Component {
  
  render() {  

    return (
      <React.Fragment>
      <Layout>
        <Switch>
          <Route path = '/budgets' component = {Budgets}/>
          <Route path = '/' exact component = {BudgetBuilder}/>
        </Switch>
      </Layout>
      </React.Fragment>
   
    );

    // return React.createElement('div', {className:'App'}, React.createElement('h1',null,'hey there motha fucka'));
  }
}

export default App;
