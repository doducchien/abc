import React, { Component } from "react";
import Mess from './Mess'
import { connect } from 'react-redux'
// import InfiniteScroll from 'react-infinite-scroll'

class MessArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countMess: 15,
            isLoadding: false,
            nameSearch: ''
        }
        
    }

    componentWillReceiveProps = (nextProps)=>{
        var nameSearch = nextProps.send_nameSearch_from_ListMess_to_MessArea;
        if(nameSearch !== this.state.nameSearch){
            this.setState({nameSearch: nameSearch})
        }
        
    }

    // renderMess(){
    //     var isOnline = this.props.isOnline;
    //     var listMess = this.props.listMess;
    //     var length = this.state.countMess;
    //     var result = [];
    //     for (var i = 0; i < length; i++) {
    //         var idOnline = isOnline.find((item) => {
    //             return item.id === listMess[i].idTalker
    //         })
    //         result.push(<Mess isOnline={idOnline ? true : false} key={i} nameMess={listMess[i].nameMess}></Mess>)
    //     }
    //     return result;
    // }

    render() {
        var result = [];
        var lenghtLoad = this.state.countMess;

        var listMess = this.props.listMess;
        var isOnline = this.props.isOnline;

        var nameSearch = this.state.nameSearch;
        var i;
        
        if(nameSearch === ''){
            
            for(i = 0; i < lenghtLoad; i++){
                var online = isOnline.find((item)=>{
                    if(item.id === listMess[i].idTalker){
                        return 1;
                    }
                })
                result.push(<Mess isOnline={online ? true : false} key={i} nameMess={listMess[i].nameMess}></Mess>);
            }
            
        }
        else{
            for(i = 0; i < listMess.length; i++){
                if(listMess[i].nameMess.toLowerCase().indexOf(nameSearch.toLowerCase()) !== -1){
                    var online = isOnline.find((item)=>{
                        if(item.id === listMess[i].idTalker) return 1;
                    })
                    result.push(<Mess isOnline={online ? true : false} key={i} nameMess={listMess[i].nameMess}></Mess>);
                }
                
                
            }
        }

        return (
            
            <div className='mess-area' ref='myscroll'>
                {result}
                {this.state.isLoadding ? <h3 style={{ textAlign: 'center' }}>....Loadding....</h3> : ''}

            </div>


        )
    }
    componentDidMount = () => {
        
        this.refs.myscroll.scrollTo(0, 0)
        this.refs.myscroll.addEventListener('scroll', () => {
            var maxListMess = this.props.listMess.length;
            var countMess = this.state.countMess;
            
            if (this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >= this.refs.myscroll.scrollHeight) {

                this.setState({
                    isLoadding: true
                });
                setTimeout(() => { this.setState({ countMess: countMess + 5 < maxListMess ? countMess + 5 : maxListMess, isLoadding: false }) }, 1000)
            }
        })

    }
}
var mapStateToProps = (state) => {
    var listMess = state.listMess.map((item) => {
        return {
            idMess: item.idMess,
            nameMess: item.nameMess,
            idTalker: item.idTalker

        }
    })
    return {
        listMess: listMess,
        isOnline: state.isOnline
    }
}
export default connect(mapStateToProps, null)(MessArea);