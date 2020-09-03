import React, { Component } from "react";
import Modal from 'react-modal'
import Webcam from "react-webcam";
import { connect } from 'react-redux';
import * as action from '../actions/rootAction'

class ModalCamera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenCamera: false,
            permissionsState: true
        }
    }
    // shouldComponentUpdate = (nextProps, nextState)=>{
    //     return (
    //         nextProps.openCamera != this.props.openCamera ||
    //          nextState.isShowCamera != this.state.isOpenCamera ||
    //           nextState.permissionsState != this.state.permissionsState)
    // }
    componentWillReceiveProps = (nextProps) => {

  
        if (nextProps.isOpenCamera !== this.state.isOpenCamera) {
            this.setState({ isOpenCamera: nextProps.isOpenCamera })
        }


    }
    closeCamera = () => {

        this.props.closeCamera();
    }
    onUserMediaError = (b) => {

        if (b) this.setState({ permissionsState: false });

    }
    // renderWebCam = () => {
    //     if (this.state.isOpenCamera) {
    //         return <Webcam
    //             open={this.state.isOpenCamera}
    //             audio={false}
    //             height='470px'
    //             onUserMediaError={this.onUserMediaError}
    //         ></Webcam>
    //     }
    //     return ''
    // }
    render() {
        
        var style = {
            content: {
                width: '800px',
                height: '600px',
                margin: 'auto',
                transition: "all .25s linear",
                textAlign: 'center',
                borderRadius: '20px',
                overflow: 'hidden',
                // border: '2px solid black',
                boxShadow: "0 10px 20px -10px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)", 
                position: 'relative'
            }
        }
        return (
            <Modal

                ariaHideApp={false}
                isOpen={Boolean(this.state.isOpenCamera)}

                style={style}
            >
                {this.state.permissionsState ?
                    <Webcam
                        open={this.state.isOpenCamera}
                        audio={false}
                        height='470px'
                        onUserMediaError={this.onUserMediaError}
                    >

                    </Webcam>
                    : <h3 style={{ margin: 'auto' }}>Vui lòng cấp quyền camera để được sử dụng tính năng này bằng cách vào phần cài đặt của trình duyệt hoặc reload lại trang web và chấp nhận quyền sử dụng camera cho chúng tôi</h3>
                }
                <button style={{ position: 'absolute', bottom: '20px', left: '300px', width: '200px' }} onClick={this.closeCamera} type="button" className="btn btn-danger">Hủy bỏ</button>
            </Modal>
        )
    }
}
const mapStateToProps = (state) => {
   
    return {
        isOpenCamera: state.isOpenCamera
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        closeCamera: () => {
            dispatch(action.action_closeCamera());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalCamera);