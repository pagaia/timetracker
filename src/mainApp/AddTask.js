import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import { connect } from "react-redux";
import { actions } from "./index";
import { bindActionCreators } from "redux";
import { reduxForm, change } from "redux-form";
import Button from "@material-ui/core/Button";

const ADD_TASK_FORM = "ADD_TASK_FORM";

let AddTask = props => {
  const addTask = e => {
    e.preventDefault();
    props.change("newtask", "");
    props.addTask(props.newtask);
  };
  return (
    <form className="add-task">
      <label htmlFor="newtask">Add a task</label>
      <Field
        name="newtask"
        id="newtask"
        component="input"
        type="text"
        placeholder="add a new task"
      />

      <Button variant="contained" color="primary" type="submit" onClick={addTask} disabled={!props.newtask}>
        Add task
      </Button>
    </form>
  );
};

AddTask.propTypes = {
  /**
   * action to call to add a new task
   */
  action: PropTypes.func
};

AddTask = reduxForm({
  // a unique name for the form
  form: ADD_TASK_FORM
})(AddTask);

const mapStateToProps = state => ({
  tasks: state.mainReducer.tasks,
  newtask:
    state.form[ADD_TASK_FORM] &&
    state.form[ADD_TASK_FORM].values &&
    state.form[ADD_TASK_FORM].values.newtask
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTask: actions.addTask
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTask);
