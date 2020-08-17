import React, { Component } from "react";
import hoa from '../image/hoa.jpg'

class Mess extends Component{
    render(){
        return(
            <div className='mess'>
              <div className="img-mess-area">
                  <img src={hoa}></img>
              </div>
              <div className='content-mess-area'>
                <b>Đoàn Thị Mai Hoa</b>
                <br></br>
                  A ơi sang sửa ống nước cho em
              </div>
            </div>   
        )
    }
}
export default Mess;