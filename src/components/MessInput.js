import React, { Component, PureComponent } from "react";
import { connect } from 'react-redux';
import * as action from '../actions/rootAction'
// import ModalCamera from './ModalCamera';

import Emoji from './Emoji'

class MessInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClickOnIconEmoji: false,
        }
    }
   
    openCamera = () => {
        this.props.openCamera()
    }
    openAppointment = () => {
        this.props.openAppointment()
    }
    openMic = () => {
        this.props.openMic();
    }
    openEmoji = () => {
        this.props.openEmoji();
    }
    

    render() {

        return (
            <div className='mess-input' style={this.props.style}>
               
                <div className='icons-input'>
                    <Emoji></Emoji>
                    <i ref='iconEmojiArea' onClick={this.openEmoji} className="fa fa-smile-o fa-lg" aria-hidden="true"></i>

                    <label>
                        <i className="fa fa-file-image-o fa-lg" aria-hidden="true"></i>
                        <input type="file" accept="*" multiple="" style={{ display: "none" }} />
                    </label>

                    <label>
                        <i onClick={this.openCamera} className="fa fa-camera fa-lg" aria-hidden="true"></i>
                    </label>

                    <label><i onClick={this.openMic} className="fa fa-microphone fa-lg" aria-hidden="true"></i></label>
                    <i onClick={this.openAppointment} className="fa fa-clock-o fa-lg" aria-hidden="true"></i>
                </div>
                <div className='input-like'>
                    <form>
                        <input placeholder='Nhập tin nhắn...'></input>
                    </form>
                    <i className="fa fa-heart fa-lg" aria-hidden="true"></i>
                </div>
            </div>

        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        openCamera: () => {
            dispatch(action.action_openCamera())
        },
        openAppointment: () => {
            dispatch(action.action_openAppointment())
        },
        openMic: () => {
            dispatch(action.action_openMic())
        },
        openEmoji: ()=>{
            dispatch(action.action_openEmoji())
        },
        closeEmoji:()=>{
            dispatch(action.action_closeEmoji())
        },
      
    }
}
export default connect(null, mapDispatchToProps)(MessInput);
