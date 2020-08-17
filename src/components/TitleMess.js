import React, { Component } from "react";
import avt1 from '../image/avt1.jpg'
import LogoMess from './LogoMess'
import TitleControllerMess from './TitleControllerMess'
class TitleMess extends Component {
    render() {
        return (
            <div className="title-mess">
                <LogoMess></LogoMess>
                <TitleControllerMess></TitleControllerMess>
            </div>
        )
    }
}
export default TitleMess;