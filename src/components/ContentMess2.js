import React, { Component } from "react";
import hoa from '../image/hoa.jpg';

class ContentMess2 extends Component {
    render() {
        return (
            <div className='content-mess-2'>
                <div className='div-text-img'>
                    <div className='content-text-2'>
                        <p>Dạ vâng anh qua nhanh lên ạ, em rất cần anh ạ</p>
                    </div>
                    <div className='img-mess-2'><img src={hoa}></img></div>

                </div>
            </div>
        )
    }
}
export default ContentMess2;