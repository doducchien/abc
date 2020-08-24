import React, { Component } from "react";
import {connect} from 'react-redux';
import * as action from '../actions/rootAction'
import ModalCamera from './ModalCamera';

class MessInput extends Component {
   
    openCamera = () =>{
        this.props.openCamera()
    }
    openAppointment = () =>{
        this.props.openAppointment()
    }
    render() {
        console.log('messinput')
        return (
            <div className='mess-input' style={this.props.style}>
                
                <div className='icons-input'>
                    <i className="fa fa-smile-o fa-lg" aria-hidden="true"></i>

                    <label >
                        <i className="fa fa-file-image-o fa-lg" aria-hidden="true"></i>
                        <input type="file" accept="*" multiple="" style={{ display: "none" }} />
                    </label>

                    <label>
                        <i onClick={this.openCamera} className="fa fa-camera fa-lg" aria-hidden="true"></i>
                    </label>

                    <i className="fa fa-microphone fa-lg" aria-hidden="true"></i>
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
const mapDispatchToProps = (dispatch)=>{
    return{
        openCamera: ()=>{
            dispatch(action.action_openCamera())
        },
        openAppointment: ()=>{
            dispatch(action.action_openAppointment())
        }
    }
}
export default connect(null, mapDispatchToProps) (MessInput);
