import React, { Component } from "react";

class SpecialMess extends Component {
    render() {
        return (
            <div className='special-mess'>
                <div className='special-mess-title'>
                    <div className='special-mess-title-icon'>
                        <i className="fa fa-file-image-o" aria-hidden="true"></i>&nbsp;
                        <span>{this.props.title}</span>
                    </div>
                    <div className='special-mess-title-arrow'> {'v'}</div>

                </div>
            </div>
        )
    }
}
export default SpecialMess;