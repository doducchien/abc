import React, { Component } from "react";
import hoa from '../image/hoa.jpg'


class LogoInfo extends Component{
    render(){
        return(
            <div className="logo-info">
                <div className="logo-img-info">
                    <img alt='' src={hoa}></img>
                </div>
                <div className="name-title-info">
                    <b>Đoàn Thị Mai Hoa</b>
                </div>
                <div className='rank'>
                <i className="fa fa-star fa-2x" aria-hidden="true"></i>
                <i className="fa fa-star fa-2x" aria-hidden="true"></i>
                <i className="fa fa-star fa-2x" aria-hidden="true"></i>
                <i className="fa fa-star-o fa-2x" aria-hidden="true"></i>
                <i className="fa fa-star-o fa-2x" aria-hidden="true"></i>
                </div>
            </div>   
        )
    }
}
export default LogoInfo;