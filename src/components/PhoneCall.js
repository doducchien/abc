import React, { Component } from "react";
import hoa from '../image/hoa.jpg'

class PhoneCall extends Component {
    endPhoneCall = () =>{
        window.close();
    }
    render() {
        return (
            <div className='phone-call'>
                <div className='img-call'>
                    <img alt='' src={hoa}></img>
                    <hr></hr>
                   <h3> Bạn đang gọi tới Đoàn Thị Mai Hoa</h3>
                   <div><i className="fa fa-phone-square fa-5x" aria-hidden="true"></i></div>
                   <h3>....Đang kết nối....</h3>
                </div>
                <div className='content-call'></div>
                <div className='btn-call-end'>
                    <button onClick={this.endPhoneCall} type="button" className="btn btn-danger">Kết thúc</button>

                </div>
            </div>
        )
    }
}
export default PhoneCall;