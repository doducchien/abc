import React, { Component } from "react";

import LogoInfo from './LogoInfo';
import SpecialMess from './SpecialMess'
class Info extends Component{
    render(){
        return(
            <div className='info'>
                <LogoInfo></LogoInfo>
                <SpecialMess></SpecialMess>
                <SpecialMess></SpecialMess>
                <SpecialMess></SpecialMess>
            </div>   
        )
    }
}
export default Info;