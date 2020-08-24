import React, { Component } from "react";
import hoa from '../image/hoa.jpg'

class PhoneCallVideo extends Component {
    endPhoneCall = () =>{
        window.close();
    }
    render() {
        return (
            <div className='phone-call-video'>
                <div className='img-call-video'>
                    <img alt='' src={hoa}></img>
                    <hr></hr>
                   <h3> Bạn đang gọi video tới Đoàn Thị Mai Hoa</h3>
                   <div><i className="fa fa-video-camera fa-3x" aria-hidden="true"></i></div>
                   <h3>....Đang kết nối....</h3>
                </div>
                <div className='content-call-video-end'></div>
                <div className='btn-call-video-end'>
                    <button onClick={this.endPhoneCall} type="button" className="btn btn-danger">Kết thúc</button>

                </div>
            </div>
        )
    }
}
export default PhoneCallVideo;