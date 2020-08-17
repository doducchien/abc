import React, { Component } from "react";

class MessInput extends Component {
    render() {

        return (
            <div className='mess-input'>
                <div className='icons-input'>
                    <i class="fa fa-smile-o fa-lg" aria-hidden="true"></i>
                    <i class="fa fa-file-image-o fa-lg" aria-hidden="true"></i>
                    <i class="fa fa-camera fa-lg" aria-hidden="true"></i>
                    <i class="fa fa-microphone fa-lg" aria-hidden="true"></i>
                </div>
                <div className='input-like'>
                    <form>
                        <input placeholder='Nhập tin nhắn...'></input>
                    </form>
                    <i class="fa fa-heart fa-lg" aria-hidden="true"></i>
                </div>
            </div>

        )
    }
}
export default MessInput;