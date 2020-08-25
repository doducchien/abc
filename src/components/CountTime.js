import React, { Component } from 'react';

class CountTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1195
        }
    }
    componentDidMount = () => {
        setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 1000)



    }
    render() {
        var count = this.state.count
        var second2 = count % 10;
        var second1 = (count % 60 - second2)/10;
        var hour2 = Math.floor( count / 60) % 10;
        var hour1 = Math.floor( Math.floor( count / 60) / 10)
        // console.log(hour1 + hour2 + " : " + second1 + second2)
        // console.log(count)
        return (
            <div>
                <h4>{hour1 + "" +  hour2 + " : " + second1 + "" + second2}</h4>
              
            </div>

        )
    }

}
export default CountTime;




 // constructor() {
    //     super();
    //     this.state = { time: {}, seconds: 5 };
    //     this.timer = 0;
    //     this.startTimer = this.startTimer.bind(this);
    //     this.countDown = this.countDown.bind(this);
    // }

    // secondsToTime(secs) {
    //     let hours = Math.floor(secs / (60 * 60));

    //     let divisor_for_minutes = secs % (60 * 60);
    //     let minutes = Math.floor(divisor_for_minutes / 60);

    //     let divisor_for_seconds = divisor_for_minutes % 60;
    //     let seconds = Math.ceil(divisor_for_seconds);

    //     let obj = {
    //         "h": hours,
    //         "m": minutes,
    //         "s": seconds
    //     };
    //     return obj;
    // }

    // componentDidMount() {
    //     let timeLeftVar = this.secondsToTime(this.state.seconds);
    //     this.setState({ time: timeLeftVar });
    // }

    // startTimer() {
    //     if (this.timer == 0 && this.state.seconds > 0) {
    //         this.timer = setInterval(this.countDown, 1000);
    //     }
    // }

    // countDown() {
    //     // Remove one second, set state so a re-render happens.
    //     let seconds = this.state.seconds - 1;
    //     this.setState({
    //         time: this.secondsToTime(seconds),
    //         seconds: seconds,
    //     });

    //     // Check if we're at zero.
    //     if (seconds == 0) {
    //         clearInterval(this.timer);
    //     }
    // }

    // render() {
    //     return (
    //         <div>
    //             <button onClick={this.startTimer}>Start</button>
    //         m: {this.state.time.m} s: {this.state.time.s}
    //         </div>
    //     );
    // }