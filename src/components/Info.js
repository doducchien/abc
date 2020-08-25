import React, { Component } from "react";

import LogoInfo from './LogoInfo';
import SpecialMess from './SpecialMess'
// import { connect } from "react-redux";

class Info extends Component{
  
    render(){
        var isShowAllInfo = this.props.toggleInfoAll;
        var styleTooggleInfo = {display: 'none'}

        return(
            <div className='info' style={isShowAllInfo? {} : styleTooggleInfo}>
                <LogoInfo></LogoInfo>
                <SpecialMess title={'Media'}></SpecialMess>
                <SpecialMess title={'File'}></SpecialMess>
                <SpecialMess title={'Link'}></SpecialMess>
            </div>   
        )
    }
    
}
// const mapStateToProps = (state)=>{
//     return{
//         isShowAllInfo: state.isShowInfo.isShowAllInfo
//     }
// }
export default  Info;