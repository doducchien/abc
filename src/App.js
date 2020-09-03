import React, { Component } from 'react';
import './App.css';

import Home from './components/Home'
import NotFound from './components/NotFound'
import PhoneCallVideo from './components/PhoneCallVideo'
import PhoneCall from './components/PhoneCall';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import HomeMess from './components/HomeMess';
import HomeCalendar from './components/HomeCalendar'
import Header from './components/Header'
import HomeMap from './components/HomeMap'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className='header'><Header></Header></div>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/homecalendar' component={HomeCalendar}></Route>
          <Route exact path='/homemess' component={HomeMess}></Route>
          <Route exact path='/homemap' component={HomeMap}></Route>
          <Route exact path='/homemess/phonecall' component={PhoneCall}></Route>
          <Route exact path='/homemess/phonecallvideo' component={PhoneCallVideo}></Route>
          <Route component={NotFound}></Route>
        </Switch>

      </BrowserRouter>
      
    );
  }
}

export default App;
