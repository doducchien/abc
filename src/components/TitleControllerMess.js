import React, { Component } from "react";
import {connect} from 'react-redux';
import * as action from '../actions/rootAction'

import ModalCamera from './ModalCamera'
import ModalAppointment from './ModalAppointment'
class TitleControllerMess extends Component {
    

    render() {
        return (

            <div className="title-controller-mess">
                <i title='Cuộc gọi thoại' className="fa fa-phone fa-2x" aria-hidden="true" onClick={this.phoneCall}></i>
                <i title='Cuộc gọi video' className="fa fa-video-camera fa-2x" aria-hidden="true" onClick={this.phoneCallVideo}></i>
                <i title='Thông tin chi tiết' className="fa fa-info-circle fa-2x" aria-hidden="true" onClick={this.toggleInfoAll}></i>
                <ModalCamera></ModalCamera>
                <ModalAppointment></ModalAppointment>   

            </div>
        )
    }   
    phoneCall = () => {
        window.open('/phonecall', 'newwindow ', "top=0, left=0, width=600px,height=600px")
    }
    
    phoneCallVideo = ()=>{
        window.open('/phonecallvideo', 'newwindow','top=0, left=800, width=600px,height=600px')
    }
    toggleInfoAll = () =>{
        this.props.toggleInfoAll();
    }
    
}
// const mapDispatchToProps = (dispatch)=>{

//         return{
//             toggleInfo: ()=>{
//                 dispatch(action.action_toggleInfo())
//             }
//         }
// }
export default TitleControllerMess;