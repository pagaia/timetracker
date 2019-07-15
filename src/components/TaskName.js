import React, { Component } from "react";
import PropTypes from "prop-types";
import ButtonLink from "./ButtonLink";
import { Field, reduxForm } from "redux-form";
import { Button } from "@material-ui/core";

const CHANGE_NAME_FORM = "CHANGE_NAME_FORM";

class TaskName extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false, name: props.name };
    console.log("name: ", props.name);
    this.handleEditName = this.handleEditName.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleEditName() {
    this.setState({ edit: !this.state.edit });
  }

  handleChange(e) {
    console.log("handleChange: ", e.target.value);
    this.setState({ name: e.target.value });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.handleEditName();
    this.props.action(this.state.name);
  // change(FORM_NAME, "newName", null);
  }

  render() {
    const { name } = this.props;

    if (this.state.edit) {
      return (
        <div>
          <Field
            name="newName"
            component="input"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={this.handleOnSubmit}
          >
            Submit
          </Button>
        </div>
      );
    }
    return (
      <div>
        <ButtonLink
          action={this.handleEditName}
          ariaLabel="Change name"
          text={name}
        />
      </div>
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
  action: PropTypes.func
};

TaskName = reduxForm({
  // a unique name for the form
  form: CHANGE_NAME_FORM
})(TaskName);
export default TaskName;
