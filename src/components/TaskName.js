import React, { Component } from "react";
import PropTypes from "prop-types";
import ButtonLink from "./ButtonLink";
import { Field, reduxForm, change } from "redux-form";
import { Button, Grid, TextField } from "@material-ui/core";

const CHANGE_NAME_FORM = "CHANGE_NAME_FORM";

class TaskName extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false, name: props.name };
  }

  componentDidMount(){
    change(CHANGE_NAME_FORM, "newName", this.state.name);
  }

  handleEditName = () => {
    this.setState({ edit: !this.state.edit });
  };

  handleChange = (e) => {
    console.log("new value?: ", e)
    this.setState({ name: e.target.value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.handleEditName();
    this.props.action(this.state.name);
    // change(FORM_NAME, "newName", null);
  };

  render() {
    const { name } = this.props;

    if (this.state.edit) {
      return (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Field
              name="newName"
              component={TextField}
              //value={this.state.name}
             // onChange={this.handleChange}
              label="Change name"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={this.handleOnSubmit}
            >
              Change
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="secondary"
              type="cancel"
              onClick={this.handleEditName}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      );
    }
    return (
      <ButtonLink
        action={this.handleEditName}
        ariaLabel="Change name"
        text={name}
      />
    );
  }
}

TaskName.propTypes = {
  /**
   * name of the task to display
   */
  name: PropTypes.string,
  /**
   * function to call to update  the name
   */
  action: PropTypes.func,
};

// TaskName = reduxForm({
//   // a unique name for the form
//   form: CHANGE_NAME_FORM,
// })(TaskName);

export default TaskName;
