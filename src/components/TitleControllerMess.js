import React, { Component } from "react";
import Popup from 'reactjs-popup';
import Modal from 'react-modal';
import NewWindow from 'react-new-window';
import {Route} from 'react-router-dom';

class TitleControllerMess extends Component {

    render() {
        return (

            <div className="title-controller-mess">
                <i class="fa fa-phone fa-2x" aria-hidden="true" onClick={this.phoneCall}></i>
                <i class="fa fa-video-camera fa-2x" aria-hidden="true" onClick={this.phoneCallVideo}></i>
                <i class="fa fa-info fa-2x" aria-hidden="true"></i>

            </div>
        )
    }   
    phoneCall = () => {
        window.open('/phonecall', 'newwindow ', "top=0, left=0, width=600px,height=600px")
    }
    
    phoneCallVideo = ()=>{
        window.open('/phonecallvideo', 'newwindow','top=0, left=800, width=600px,height=600px')
    }

}
export default TitleControllerMess;