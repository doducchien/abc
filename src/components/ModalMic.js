import { ReactMic } from 'react-mic';
import Modal from 'react-modal'
import { connect } from 'react-redux'

import React, { Component } from 'react';
import * as action from '../actions/rootAction';
import CountTime from './CountTime';

class ModalMic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenMic: false,
            record: false,
            isRecording: false

        }
    }
    closeMic = () => {
        this.setState({record: false})
        this.props.closeMic()
    }
    toggleRecording = () => {
        var record = this.state.record;
        var isRecording = this.state.isRecodding;
        this.setState({ record: !record, isRecording: !isRecording })
    }
    onStop = (r) => {
        console.log("stop", r)
    }
    // onData = (r) =>{
    //     console.log('ondata', r)
    // }
    componentWillReceiveProps = (nextProps) => {
        var isOpenMicNextProps = nextProps.isOpenMic;

        var isOpenMic = this.state.isOpenMic;
        if (isOpenMicNextProps !== isOpenMic) {
            this.setState({ isOpenMic: isOpenMicNextProps })

        }

    }
    componentDidMount = () => {

    }


    render() {
        var mic;
        try {
            mic =
                <ReactMic
                    record={this.state.record}
                    className="react-mic-modal"
                    onStop={this.onStop}
                    onData={this.onData}
                    strokeColor="#fff"
                    backgroundColor="rgb(21, 126, 145)"
                >

                </ReactMic>
        }
        catch{
            mic = 'no mic devices'
        }


        var style = {
            content: {
                width: '500px',
                height: '320px',
                top: '100px',
                margin: 'auto',
                textAlign: 'center',
                borderRadius: '20px',
                border: '2px solid black',
                posistion: 'relative',
                overflow: 'hidden'
            }
        }
        return (

            <Modal

                ariaHideApp={false}
                isOpen={this.state.isOpenMic}
                style={style}
            >
                <i onClick={this.closeMic} className="fa fa-close fa-2x close-mic-icon" aria-hidden="true"></i>
                <div>
                    <h4>Chế độ thu âm</h4>

                </div>

                {mic}

                <div className='modal-react-mic-btn'>
                    <button onClick={this.toggleRecording} type="button" className="btn btn-danger">
                        <i className="fa fa-microphone fa-2x" aria-hidden="true"></i>
                    </button>
                </div>
                <div className='group-time-icon'>

                    <CountTime></CountTime>

                </div>
                <span className='send-record'><i className="fa fa-send-o fa-2x" aria-hidden="true"></i></span>

            </Modal>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        isOpenMic: state.isShowMic
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        closeMic: () => dispatch(action.action_closeMic())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalMic);