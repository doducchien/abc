import React, {Component} from 'react'

class HomeCalendar extends Component{
    render(){
        return(
            <div className='home-calendar'>
                <div className='left-calendar'>
                    <div className='create-calendar'>
                        <span>Tạo lịch</span>
                        <span><i class="fa fa-plus-circle" aria-hidden="true"></i></span>
                    </div>
                </div>
                <div className='right-calendar'></div>
            </div>
        )
    }
}
export default HomeCalendar;