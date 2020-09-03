import React, { Component } from 'react'
import bk from '../image/bk.jpg';
import hoa from '../image/hoa.jpg'
import ironman from '../image/ironman.jpg';
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className='header-component'>
                <div className='header-left'>
                    <img src={bk}></img>
                    <span>HuntSub</span>
                    <form>
                        <input value='' name='search' type='text' placeholder='Tìm kiếm'></input>
                    </form>
                </div>
                <div className='header-middle'>
                    <Link to='/'><i class="fa fa-home fa-2x" aria-hidden="true"></i></Link>
                    <Link to='/homemap'><i class="fa fa-street-view fa-2x" aria-hidden="true"></i></Link>
                    <Link to='/homecalendar'><i class="fa fa-calendar-o fa-2x" aria-hidden="true"></i></Link>
                </div>
                <div className='header-right'>
                    <span className='user-header'>
                        <img src={ironman}></img>
                        <span>Chiến</span>
                    </span>
                    <Link to='/homemess'><i class="fa fa-comments fa-2x" aria-hidden="true"></i></Link>
                    <Link><i class="fa fa-bell fa-2x" aria-hidden="true"></i></Link>
                    <Link><i class="fa fa-user fa-2x" aria-hidden="true"></i></Link>

                </div>

            </div>
        )
    }
}
export default Header;