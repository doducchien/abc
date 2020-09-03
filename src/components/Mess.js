import React, { Component } from "react";
import hoa from '../image/hoa.jpg';



class Mess extends Component{
    render(){
        var nameMess = this.props.nameMess;
        var isOnline = this.props.isOnline;
        var styleOnline = isOnline? {border: '5px solid green'}: {border: '5px solid black'}
     
        return(
            <div className='mess' title='Khách hàng'>
              <div className="img-mess-area">
                  <img style={styleOnline} alt='' src={hoa}></img>
              </div>
              <div className='content-mess-area'>
                <b>{nameMess}</b>
                <br></br>
                  A ơi sang sửa ống nước cho em
                 
              </div>
            </div>   
        )
    }
}


export default Mess;