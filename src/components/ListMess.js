import React, { Component } from "react";

import Controller from './Controller'
// import Mess from './Mess'
// import { Element } from 'react-scroll'

import MessArea from './MessArea'

class ListMess extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameSearch: ''
        }
    }
    recv_nameSearch_from_Controller = (nameSearch)=>{
        this.setState({nameSearch: nameSearch});
        
    }
    render() {
        return (
            <div className='list-mess'>
                <Controller send_nameSearch_from_Controller_to_ListMess={this.recv_nameSearch_from_Controller}></Controller>
                <MessArea send_nameSearch_from_ListMess_to_MessArea={this.state.nameSearch} ></MessArea>
            </div>
            
        )
    }
}
export default ListMess;