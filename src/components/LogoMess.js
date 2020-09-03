import React, { Component } from "react";
import hoa from '../image/hoa.jpg'


class LogoMess extends Component{
    render(){
        return(
            <div className="logo-mess">
                <div className="logo-img">
                    <img alt='' src={hoa}></img>
                </div>
                <div className="name-title-mess">
                    <b>Đoàn Thị Mai Hoa</b>
                   <br></br>
                   Khách hàng
                </div>
            </div>   
        )
    }
}
export default LogoMess;