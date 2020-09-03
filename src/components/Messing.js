import React, { Component } from "react";
import ContentMess1 from './ContentMess1'
import ContentMess2 from './ContentMess2';
// import MessInput from './MessInput'


class Messing extends Component {
    constructor(props){
        super(props);
        this.state = {
            countMess: 12,
            isLoadding: false
        }
    }

    
    componentDidMount = ()=>{
       
        this.refs.myscroll.addEventListener('scroll', ()=>{
            // var element = document.getElementById('content-mess-12');
            // var topPos = element.offsetTop;
            // console.log(topPos)
            if(this.refs.myscroll.scrollTop === 0){ 
                this.refs.myscroll.scrollTo(0, 1)
                console.log(this.refs.myscroll.scrollTop);
                this.setState({isLoadding: true});
                setTimeout(()=>{
                    this.setState({
                        countMess: this.state.countMess + 2,
                        isLoadding: false
                    })
                }, 1000)
            }
            // console.log(this.refs.myscroll.scrollTop + '-' + this.refs.myscroll.scrollHeight + '-' + this.refs.myscroll.clientHeight)
        })
    }
    render() {  
        var result = [];
        var length = this.state.countMess;
        for(var i = 0; i < length; i++){
            result.unshift(<div id='content-mess-12' key={i}><ContentMess1></ContentMess1><ContentMess2 index={i}></ContentMess2></div>)
        }
        
        return (
            <div className="messing" ref='myscroll' style={this.props.style}>
                {this.state.isLoadding ? <h3 style={{textAlign:'center'}}>....Loadding....</h3>: ''}
                {result}
            </div>
        )
    }
}
export default Messing;