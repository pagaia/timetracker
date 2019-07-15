import React, { Component } from "react";
import ViewTruckedTime from "./ViewTruckedTime";
import PropTypes from "prop-types";
import { PlayLink, PauseLink, RemoveLink } from "./ButtonLink";
import TaskName from "./TaskName";

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
    if (prevProps.forceUpdate !== this.props.forceUpdate) {
      this.props.updateTotalTime(this.state.time);
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

  renderContinue() {
    if (
      !this.state.status ||
      TEMPO_STATUS.PAUSED === this.state.status ||
      TEMPO_STATUS.STOPPED === this.state.status
    ) {
      return <PlayLink action={this.start} />;
    }
    return null;
  }

  renderPause() {
    if (TEMPO_STATUS.STARTED === this.state.status) {
      return <PauseLink action={this.pause} />;
    }
    return null;
  }

  render() {
    const { time } = this.state;
    return (
      <div className="tempo">
        <TaskName action={this.props.editTaskName} name={this.props.name} />
        <div>
          {this.renderContinue()}
          {this.renderPause()}
          <RemoveLink action={this.props.remove} />
          <ViewTruckedTime seconds={time} />
        </div>
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
  remove: PropTypes.func,
  /**
   * function to call on changing the task name
   */
  editTaskName: PropTypes.func
};
export default Tempo;
