import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

class ModalAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
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
                style={style}
                isOpen={true}
            >
                <div className='modal-appointment'>
                    <span>Tạo lịch hẹn</span>
                    <span><i className="fa fa-window-close fa-lg" aria-hidden="true"></i></span>

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

                    <nav class="navbar navbar-default" role="navigation">

                        <div class="navbar-header">
                            <p class="navbar-brand person-service">Người cung cấp dịch vụ</p>
                        </div>


                        <div class="collapse navbar-collapse navbar-ex1-collapse">

                            <ul class="nav navbar-nav navbar-right">

                                <li class="dropdown">
                                    <a class="dropdown-toggle drop-person" data-toggle="dropdown">Đỗ Đức Chiến <b class="caret"></b></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">Ngọc Trinh</a></li>
                                        <li><a href="#">Ngân 98</a></li>
                                        <li><a href="#">Maria Ozawa</a></li>
                                        <li><a href="#">Yui Hatano</a></li>
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

                    <nav class="navbar navbar-default" role="navigation">

                        <div class="navbar-header">
                            <p class="navbar-brand person-service">Lặp lại</p>
                        </div>


                        <div class="collapse navbar-collapse navbar-ex1-collapse">

                            <ul class="nav navbar-nav navbar-right">

                                <li class="dropdown">
                                    <a class="dropdown-toggle drop-person" data-toggle="dropdown">Không lặp lại<b class="caret"></b></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">Lặp lại hàng tuần</a></li>
                                        <li><a href="#">Lặp lại hàng tháng</a></li>
                                        <li><a href="#">Lặp lại hàng năm</a></li>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className='modal-group-btn-date-picker'>
                    <div className='date-picker-button'>
                        <button type="button" class="btn btn-default">Hủy</button>
                        <button type="button" class="btn btn-info">Tạo</button>
                    </div>


                </div>

            </Modal>
        )
    }

    onChangeDate = (date) => {
        this.setState({ date: date })
    }
}
export default connect(null, null)(ModalAppointment)