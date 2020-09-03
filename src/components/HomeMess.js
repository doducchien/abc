import React, {Component} from 'react'
import ListMess from './ListMess'
import ContentMess from './ContentMess'
class HomeMess extends Component{
    render(){
        return(
            <div className='home-mess'>
                <div className='left-app'>
                    <ListMess></ListMess>
                </div>
                <div className='right-app'>
                    <ContentMess></ContentMess>
                </div>
            </div>
        )
    }
}
export default HomeMess;