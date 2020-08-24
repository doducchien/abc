import React, { Component } from "react";
import PropsTypes from 'prop-types';


class Controller extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
        }
    }
    onSubmit = (e)=>{
        e.preventDefault();
        // this.props.send_nameSearch_from_Controller_to_ListMess(this.state.search.trim());
    }
    onChange = (e) =>{
        var name = e.target.name;
        var value = e.target.value.trim();
        this.setState(
            {
                [name]: value
            },
        )
        
        setTimeout(this.props.send_nameSearch_from_Controller_to_ListMess(value.trim()), 10);
        
    }
    render() {
        
        
        return (
            <div className='controller'>
                <div className='controller-mess'>
                    <div className='chat'><b>Chats</b></div>
                    <div className='icon-chat'>
                        <i className="fa fa-gear fa-lg" aria-hidden="true"></i>
                        <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i>
                        <i className="fa fa-arrow-circle-right fa-lg" aria-hidden="true"></i>
                    </div>


                </div>
                <div className='search-form'>
                    <form onSubmit={this.onSubmit}>
                        <input placeholder="Tìm kiếm" value={this.state.search} name='search' onChange={this.onChange}></input>
                    </form>
                </div>
            </div>

        )
    }
}
Controller.propsTypes={
    search: PropsTypes.string
}



// const mapStateToProps = (state, ownProps)=>{
//     var listNameMess = state.listMess.map((item)=>{
//         return item.nameMess;
//     })
//     return {
//         listNameMess: listNameMess
//     }
// }
// export default connect(mapStateToProps, null)(Controller);
export default Controller;