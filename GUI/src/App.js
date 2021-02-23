import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Pages/Home'
import Getstarted from './components/Pages/Getstarted';
import Predict from './components/Pages/Predict';
import Login from './components/Pages/Login'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path= '/log-in' component={Login}/>
          <Route path = '/sign-up' component = {Getstarted}/>
          <Route path = '/predict' component = {Predict}/>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
