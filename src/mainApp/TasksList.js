import React from "react";
import { connect } from "react-redux";
import Tempo from "../components/Tempo";
import { actions } from "./index";
import { bindActionCreators } from "redux";
import { Button } from "@material-ui/core";
import ViewTruckedTime from "../components/ViewTruckedTime";

function TasksList({
  tasks,
  activeTask,
  setActiveTask,
  removeTask,
  forceUpdateFn,
  forceUpdate,
  updateTotalTime,
  totalTime
}) {
  if (!tasks.length) {
    return (
      <div>
        <h2>Please add a task to start counting the time</h2>
      </div>
    );
  }

  const list = tasks.map((task, idx) => (
    <Tempo
      key={idx}
      name={task.name}
      stop={idx !== activeTask}
      activateTask={() => setActiveTask(idx)}
      remove={() => removeTask(idx)}
      forceUpdate={forceUpdate}
      updateTotalTime={time => updateTotalTime(idx, time)}
    />
  ));

  const renderUpdateTotal = () => {
    return (
      tasks.length && (
        <div className="total">
          <span>
            <Button variant="contained" color="primary" onClick={forceUpdateFn}>
              Update time
            </Button>
          </span>
          <span> Time worked:</span>
          <ViewTruckedTime seconds={totalTime} />
        </div>
      )
    );
  };

  return (
    <div className="tasks">
      {list}
      {renderUpdateTotal()}
    </div>
  );
}

const mapStateToProps = state => ({
  tasks: state.mainReducer.tasks,
  activeTask: state.mainReducer.activeTask,
  forceUpdate: state.mainReducer.forceUpdate,
  totalTime: state.mainReducer.totalTime
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setActiveTask: actions.setActiveTask,
      removeTask: actions.remove,
      forceUpdateFn: actions.forceUpdate,
      updateTotalTime: actions.updateTotalTime
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksList);
