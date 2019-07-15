import React, { Fragment } from "react";
import { connect } from "react-redux";
import Tempo from "../components/Tempo";
import { actions } from "./index";
import { bindActionCreators } from "redux";
import TotalTime from "./TotalTime";

function TasksList({
  tasks,
  activeTask,
  setActiveTask,
  removeTask,
  forceUpdateFn,
  forceUpdate,
  updateTotalTime,
  totalTime,
  changeTaskName
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
      editTaskName={v => changeTaskName(v, idx)}
    />
  ));

  return (
    <Fragment>
      <div className="tasks">{list}</div>
      {tasks.length && (
        <TotalTime action={forceUpdateFn} totalTime={totalTime} />
      )}
    </Fragment>
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
      updateTotalTime: actions.updateTotalTime,
      changeTaskName: actions.changeTaskName
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksList);
