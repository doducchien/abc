import React, { Component } from 'react'
import {emoji} from '../constrains/const';
import {connect} from 'react-redux';
import * as action from '../actions/rootAction'

class Emoji extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpenEmoji: false,
            // areaEmoji: null
        }
    }

    componentWillReceiveProps = (nextProps)=>{
        var isOpenEmoji = nextProps.isOpenEmoji;
        // var areaEmoji = nextProps.areaEmoji;
        if(isOpenEmoji !== this.state.isOpenEmoji ){
            this.setState({isOpenEmoji: isOpenEmoji});
        }
        // if(areaEmoji !== this.state.areaEmoji){
        //     this.setState({areaEmoji: areaEmoji})
        // }
        
    }

    renderEmoji = ()=>{
        
       var emojiList = [];
       for(var i = 0; i < emoji.length; i++){
           emojiList.push(<li key={i} onClick={this.sendIcon.bind(this, emoji[i])}>{emoji[i]}</li>) // 
       }
       return emojiList;
    }

    sendIcon(emoji){
        console.log(emoji)
    }

   

    handleClick = (event)=>{
        var target = event.target;
        if(!this.refs.emojiArea.contains(target) && target.className !== 'fa fa-smile-o fa-lg' ){ //fa fa-smile-o fa-lg
            this.props.closeEmoji();
        }
    }

    componentDidUpdate = ()=>{
        document.addEventListener('click', this.handleClick);
    }
    componentWillUnmount= () =>{
        document.removeEventListener('click', this.handleClick)
    }

    render() {
        
        var closeEmoji = {display: 'none'};
        var isOpenEmoji = this.state.isOpenEmoji;
        return (
            <ul ref='emojiArea' className='emoji' style={isOpenEmoji? {} : closeEmoji}>
                {this.renderEmoji()}
            </ul>

        )
    }
}
const mapStateToProps = (state)=>{
    return{
        isOpenEmoji: state.isShowEmoji,
        areaEmoji: state.areaIconEmoji,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        closeEmoji: ()=>{
            dispatch(action.action_closeEmoji())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Emoji);   