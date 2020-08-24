import React, { Component } from "react";
import ListMess from './ListMess'
import ContentMess from './ContentMess';
import ModalAppointment from './ModalAppointment'
class Home extends Component {
    render() {
        return (
            <div>
                <div className='left-app'>
                    <ListMess></ListMess>
                </div>
                <div className='right-app'>
                    <ContentMess></ContentMess>
                </div>
            </div>
        )
    }
}
export default Home;