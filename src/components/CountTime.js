import React, { Component } from 'react';

class CountTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.call = null;
    }
    componentWillReceiveProps = (nextProps) => {
        var record = nextProps.start;
        if (record === true) {
             this.call = setInterval(() => {
                var y = this.state.count + 1;
                this.setState({ count: y })
            }, 1000);
        }
        else {
            clearInterval(this.call)
        }

    }
    renderTime = (count) =>{
        var second2 = count % 10;
        var second1 = (count % 60 - second2) / 10;
        var hour2 = Math.floor(count / 60) % 10;
        var hour1 = Math.floor(Math.floor(count / 60) / 10);
        var result = hour1 + "" + hour2 + " : " + second1 + "" + second2;
        return result;
    }

    render() {

        return (
            <div>
                <h4>{this.renderTime(this.state.count)}</h4>

            </div>

        )
    }
}
export default CountTime;