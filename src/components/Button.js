import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  return (
    <button type="button" onClick={props.action}>
      {props.text}
    </button>
  );
};

Button.propTypes = {
  /**
   * action to call on click button
   */
  action: PropTypes.func,
  /**
   * text of the button
   */
  text: PropTypes.string
};

export default Button;
