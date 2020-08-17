import React, { Component } from "react";

import Controller from './Controller'
import Mess from './Mess'
import { Element } from 'react-scroll'
import MessArea from './MessArea'

class ListMess extends Component {
    render() {
      
        return (
            <div className='list-mess'>
                <Controller></Controller>
                <MessArea></MessArea>
            </div>
            
        )
    }
}
export default ListMess;