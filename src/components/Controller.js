import React, { Component } from "react";

class Controller extends Component {
    render() {
        return (
            <div className='controller'>
                <div className='controller-mess'>
                    <div className='chat'><b>Chats</b></div>
                    <div className='icon-chat'>
                        <i class="fa fa-gear fa-2x" aria-hidden="true"></i>
                        <i class="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
                        <i class="fa fa-arrow-circle-right fa-2x" aria-hidden="true"></i>
                    </div>


                </div>
                <div className='search-form'>
                    <form>
                        <input placeholder="Tìm kiếm"></input>
                    </form>
                </div>
            </div>

        )
    }
}
export default Controller;