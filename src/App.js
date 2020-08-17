import React, { Component } from 'react';
import './App.css';

import Home from './components/Home'
import NotFound from './components/NotFound'
import PhoneCallVideo from './components/PhoneCallVideo'
import PhoneCall from './components/PhoneCall';
import { Route, BrowserRouter, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/phonecall' component={PhoneCall}></Route>
          <Route exact path='/phonecallvideo' component={PhoneCallVideo}></Route>
          <Route component={NotFound}></Route>
        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
