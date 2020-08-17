import React, { Component } from "react";

class PhoneListen extends Component{
    render(){
        return(
            <div className='phone-listen'>
                <div className='img-listen'>
                    <img src={hoa}></img>
                    <hr></hr>
                   <h3>Cuộc gọi từ Đoàn Thị Mai Hoa</h3>
                   <div><i class="fa fa-phone-square fa-5x" aria-hidden="true"></i></div>
                   <h3></h3>
                </div>
                <div className='content-call'></div>
                <div className='btn-listen'>
                    <button type="button" class="btn btn-info">Trả lời</button>
                    <button type="button" class="btn btn-danger">Kết thúc</button>

                </div>
            </div>
        )
    }
}
export default PhoneListen;