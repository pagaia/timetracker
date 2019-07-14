import React, { Component } from "react";
import Button from "./Button";
import ViewTruckedTime from "./ViewTruckedTime";
import PropTypes from "prop-types";

const TEMPO_STATUS = {
  STARTED: "STARTED",
  PAUSED: "PAUSED",
  STOPPED: "STOPPED"
};
/**
 * Tempo component show the time spent for the related task:
 *  the status can be:
 *  undefined if not yet started counting
 *  started: if the counter is ticking
 *  paused: if the counter has been paused
 *  stopped: if the counter has been stopped
 */
class Tempo extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, status: undefined };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.pause = this.pause.bind(this);
    this.continue = this.continue.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (
      !prevProps.stop &&
      this.props.stop &&
      this.state.status === TEMPO_STATUS.STARTED
    ) {
      this.stop();
    }
  }

  activateCounter() {
    this.setState({
      status: TEMPO_STATUS.STARTED
    });
    this.interval = setInterval(
      () =>
        this.setState({
          time: this.state.time + 1
        }),
      1000
    );
  }

  start() {
    this.props.activateTask();
    this.activateCounter();
  }

  stop() {
    this.setState({
      status: TEMPO_STATUS.STOPPED
    });
    this.interval && clearInterval(this.interval);
  }

  pause() {
    this.setState({
      status: TEMPO_STATUS.PAUSED
    });
    this.interval && clearInterval(this.interval);
  }

  continue() {
    this.props.activateTask();
    this.activateCounter();
  }

  componentWillUnmount() {
    this.stop();
  }

  renderStart() {
    if (!this.state.status) {
      return <Button action={this.start} text="start" />;
    }
    return null;
  }

  renderContinue() {
    if (
      TEMPO_STATUS.PAUSED === this.state.status ||
      TEMPO_STATUS.STOPPED === this.state.status
    ) {
      return <Button action={this.start} text="continue" />;
    }
    return null;
  }

  renderPause() {
    if (TEMPO_STATUS.STARTED === this.state.status) {
      return <Button action={this.pause} text="pause" />;
    }
    return null;
  }

  renderStop() {
    if (
      TEMPO_STATUS.STARTED === this.state.status ||
      TEMPO_STATUS.PAUSED === this.state.status
    ) {
      return <Button action={this.stop} text="stop" />;
    }
    return null;
  }

  render() {
    const { time } = this.state;
    return (
      <div className="tempo">
        <span>{this.props.name}:</span>
        <ViewTruckedTime seconds={time} />
        {this.renderStart()}
        {this.renderContinue()}
        {this.renderPause()}
        {this.renderStop()}
        <Button action={this.props.remove} text="remove" />
      </div>
    );
  }
}

Tempo.propTypes = {
  /**
   * the name of the task for which start counting the tempo
   */
  name: PropTypes.string,
  /**
   * if true then stop your counter
   */
  stop: PropTypes.bool,
  /**
   * function to call to set the active task
   */
  activateTask: PropTypes.func,
  /**
   * action to remove the task tracker from the list
   */
  remove: PropTypes.func
};
export default Tempo;
