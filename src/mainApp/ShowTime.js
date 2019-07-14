import React, { Component } from "react";
import moment from "moment";
import DateTimeLabel from "../components/DateTimeLabel";

class ShowTime extends Component {
  constructor(props) {
    super(props);
    this.state = { time: moment() };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: moment() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1>
        <DateTimeLabel datetime={this.state.time} />
      </h1>
    );
  }
}

export default ShowTime;
