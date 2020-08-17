import React, { Component } from "react";
import TitleMess from './TitleMess'
import Messing from "./Messing";
import MessInput from './MessInput'
import Info from './Info'
class ContentMess extends Component {
    render() {
        return (
            <div className='content-mess'>
                <TitleMess></TitleMess>
                <div className='messing-messinput'>
                    <div>
                        <Messing></Messing>
                        <MessInput></MessInput>
                    </div>
                    <div className='info-in-content-mess'>
                        <Info></Info>
                    </div>
                </div>

            </div>

        )
    }
}
export default ContentMess;