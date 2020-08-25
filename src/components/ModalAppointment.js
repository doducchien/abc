import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import * as action from '../actions/rootAction'

class ModalAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            isShowAppointment: false
        }
    }
    componentWillReceiveProps = (nextProps) =>{
      
        if(nextProps.isShowAppointment !== this.state.isShowAppointment){
            this.setState({isShowAppointment: nextProps.isShowAppointment})
        }
    }
    render() {
     
        var style = {
            content: {
                width: '800px',
                height: '650px',
                margin: 'auto',
                transition: "all .25s linear",

                borderRadius: '20px',
                border: '2px solid black',
                position: 'relative',
                overflow: 'hidden'
            }
        }
        return (
            <Modal
                ariaHideApp={false}
                style={style}
                isOpen={Boolean( this.state.isShowAppointment)}
            >
                <div className='modal-appointment'>
                    <span>Tạo lịch hẹn</span>
                    <span><i onClick={this.closeAppointment} className="fa fa-close fa-lg" aria-hidden="true"></i></span>

                </div>
                <div><hr></hr></div>
                <div>Thêm tiêu đề</div>
                <div><hr></hr></div>
                <div className='modal-appointmen-form'>
                    <form>
                        <textarea type='text-area' placeholder='Type a message...'></textarea>
                    </form>
                </div>
                <div>

                    <nav className="navbar navbar-default" role="navigation">

                        <div className="navbar-header">
                            <p className="navbar-brand person-service">Người cung cấp dịch vụ</p>
                        </div>


                        <div className="collapse navbar-collapse navbar-ex1-collapse">

                            <ul className="nav navbar-nav navbar-right">

                                <li className="dropdown">
                                    <a className="dropdown-toggle drop-person" data-toggle="dropdown">Đỗ Đức Chiến <b className="caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li><a >Ngọc Trinh</a></li>
                                        <li><a >Ngân 98</a></li>
                                        <li><a >Maria Ozawa</a></li>
                                        <li><a >Yui Hatano</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className='group-time'>
                    <span>Thời gian: </span>
                    <span className='time'>1h nữa</span>
                    <span className='time'>2h nữa</span>
                    <span className='time'>9h sáng mai</span>
                    <span className='time'>2h chiều mai</span>
                </div>
                <div className='date-picker-group'></div>
                <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                >

                </DatePicker>
                <div className='laplai'>

                    <nav className="navbar navbar-default" role="navigation">

                        <div className="navbar-header">
                            <p className="navbar-brand person-service">Lặp lại</p>
                        </div>


                        <div className="collapse navbar-collapse navbar-ex1-collapse">

                            <ul className="nav navbar-nav navbar-right">

                                <li className="dropdown">
                                    <a className="dropdown-toggle drop-person" data-toggle="dropdown">Không lặp lại<b className="caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li><a>Lặp lại hàng tuần</a></li>
                                        <li><a>Lặp lại hàng tháng</a></li>
                                        <li><a>Lặp lại hàng năm</a></li>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className='modal-group-btn-date-picker'>
                    <div className='date-picker-button'>
                        <button onClick={this.closeAppointment} type="button" className="btn btn-default">Hủy</button>
                        <button type="button" className="btn btn-info">Tạo</button>
                    </div>


                </div>

            </Modal>
        )
    }

    onChangeDate = (date) => {
        this.setState({ date: date })
    }
    closeAppointment = ()=>{
        this.props.closeAppointment();
    }

}
const mapStateToProps = (state)=>{
    return{
        isShowAppointment: state.isShowAppointment
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        openAppointment: ()=> dispatch(action.action_openAppointment()),
        closeAppointment: ()=> dispatch(action.action_closeAppointment())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalAppointment)