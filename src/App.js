import React from 'react';
import './App.css';
import Mainpage from './components/Pages/Mainpage'
import Login from './components/Pages/Login'



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Getstarted from './components/Pages/Getstarted';
import Homepage from './components/Pages/Homepage';
import About from './components/Pages/About'
import Predict from './components/Pages/Predict';
import Contact from './components/Pages/Contact';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Mainpage}/>
          <Route path= '/log-in' component={Login}/>
          <Route path = '/sign-up' component = {Getstarted}/>
          <Route path = '/home' component = {Homepage}/>
          <Route path = '/about' component = {About}/>
          <Route path = '/predict' component = {Predict}/>
          <Route path = '/contact' component = {Contact}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;