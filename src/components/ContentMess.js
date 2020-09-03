import React, { Component } from "react";
import TitleMess from './TitleMess'
import Messing from "./Messing";
import MessInput from './MessInput'
import Info from './Info';
// import {connect} from 'react-redux'
class ContentMess extends Component {
    constructor(props){
        super(props);
        this.state = {
            isToggleAll: false
        }
    }
    toggleInfoAll = ()=>{
        this.setState({isToggleAll: !this.state.isToggleAll})
    }
    render() {
        var styleToggleInfo = {
            width: '74vw'
        }
        var isShowAllInfo = this.state.isToggleAll;
        return (
            <div className='content-mess' >
                <TitleMess toggleInfoAll={this.toggleInfoAll}></TitleMess>
                <div className='messing-messinput' style={isShowAllInfo? {}: styleToggleInfo}>
                    <div>
                        <Messing style={isShowAllInfo? {}: styleToggleInfo}></Messing>
                        <MessInput style={isShowAllInfo? {}: styleToggleInfo}></MessInput>
                    </div>
                    <div className='info-in-content-mess'>
                        <Info toggleInfoAll={this.state.isToggleAll}></Info>
                    </div>
                </div>

            </div>

        )
    }
}
// const mapStateToProps = (state)=>{
//     return{
//         isShowAllInfo: state.isShowInfo.isShowAllInfo
//     }
// }
export default ContentMess;
// isShowAllInfo? {}: 
// isShowAllInfo? {}: 
// isShowAllInfo? {}: 