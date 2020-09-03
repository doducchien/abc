import React, { Component } from "react";

import Header from './Header';
import HomeMess from './HomeMess';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomeCalendar from './HomeCalendar';
import PhoneCall from './PhoneCall'
import PhoneCallVideo from './PhoneCallVideo'
import NotFound from './NotFound'

// import ModalAppointment from './ModalAppointment'
class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='header'><Header></Header></div>
                
                
                    <Switch>
                        <Route exact path='/' component={Header}></Route>
                        <Route exact path='/homecalendar' component={HomeCalendar, Header}></Route>
                        <Route exact path='/homemess' component={HomeMess}></Route>
                        <Route exact path='/mess/phonecall' component={PhoneCall}></Route>
                        <Route exact path='/mess/phonecallvideo' component={PhoneCallVideo}></Route>
                        <Route component={NotFound}></Route>
                    </Switch>

                

                {/* <div className='content'><HomeMess></HomeMess></div>  */}

                </BrowserRouter>


        )
    }
}
export default Home;