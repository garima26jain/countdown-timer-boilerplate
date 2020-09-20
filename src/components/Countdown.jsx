import React from "react";
import Clock from "./Clock";
import CountdownForm from "./CountdownForm";

class Countdown extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  changeState(counter) {
    var tt = setInterval(() => {
      this.setState({ count: counter-- });
      if (counter < 0) {
        clearInterval(tt);
      }
    }, 1000);
  }

  //   componentDidUpdate(prevState, prevProp) {
  //     setInterval(() => {
  //       if (prevState.count !== this.state.count) {
  //         this.setState({ count: this.state.count - 1 });
  //       }
  //     }, 1000);
  //   }

  render() {
    return (
      <div>
        <Clock timeInSeconds={this.state.count} />
        <CountdownForm onSetCountdownTime={this.changeState.bind(this)} />
      </div>
    );
  }
}

export default Countdown;
