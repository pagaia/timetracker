import React from "react";
import { connect } from "react-redux";
import Tempo from "../components/Tempo";
import { actions } from "./index";
import { bindActionCreators } from "redux";

function TasksList({ tasks, activeTask, setActiveTask, removeTask }) {
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
    />
  ));

  return <div className="tasks">{list}</div>;
}

const mapStateToProps = state => ({
  tasks: state.mainReducer.tasks,
  activeTask: state.mainReducer.activeTask
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setActiveTask: actions.setActiveTask,
      removeTask: actions.remove
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksList);
