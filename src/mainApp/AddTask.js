import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import { connect } from "react-redux";
import { actions } from "./index";
import { bindActionCreators } from "redux";
import { change } from "redux-form";
import Button from "@material-ui/core/Button";
import { FORM_NAME } from "./constant";
import { Grid } from "@material-ui/core";
import TextField from "components/Input/TextField";

let AddTask = (props) => {
  const addTask = (e) => {
    e.preventDefault();
    props.changeField(FORM_NAME, "newtask", "");
    props.addTask(props.newtask);
  };
  return (
    <form className="add-task">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Field name="newtask" component={TextField} label="add a new task" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={addTask}
            disabled={!props.newtask}
          >
            Add task
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

AddTask.propTypes = {
  /**
   * action to call to add a new task
   */
  action: PropTypes.func,
};

const mapStateToProps = (state) => ({
  tasks: state.mainReducer.tasks,
  newtask:
    state.form[FORM_NAME] &&
    state.form[FORM_NAME].values &&
    state.form[FORM_NAME].values.newtask,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addTask: actions.addTask,
      changeField: change,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
