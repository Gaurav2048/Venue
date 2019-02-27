import React, { Component } from "react";
import Slide from "react-reveal/Slide";

export default class TimeUnitl extends Component {
  state = {
    deadLine : 'May, 16, 2019',
    days: '0',
    hours: '0',
    mins: '0',
    seconds:'0'
  };
  getTimeUntil(deadLine){
    const time = Date.parse(deadLine) - Date.parse(new Date())
    console.log(time);
    if (time<0){

    }else 
    {
        const seconds = Math.floor((time/1000)%60)
        const minutes = Math.floor((time/1000/60)%60)
        const hours = Math.floor((time/(1000*60*60))%24)
        const days = Math.floor((time/(1000*60*60*60)))
        
        this.setState({
            seconds: seconds,
            mins: minutes,
            hours:hours,
            days:days
        })
    }
}
  componentDidMount(){
    setInterval(() => this.getTimeUntil(this.state.deadLine), 1000)
  }
  render() {
    return (
      <Slide left delay= {1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event starts in</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="countdown_tag">hrs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.mins}</div>
              <div className="countdown_tag">mins</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.seconds}</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}
