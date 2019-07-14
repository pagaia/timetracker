import React from "react";
import PropTypes from "prop-types";

const DateTimeLabel = ({ datetime }) => {
  if (!datetime) {
    return <span>00:00</span>;
  }
  if (datetime) {
    return <span>{datetime.format("YYYY-MM-DD HH:mm")}</span>;
  }
  return <span>invalid date</span>;
};

DateTimeLabel.propTypes = {
  /**
   * the date time in moment format
   */
  datetime: PropTypes.object
};
export default DateTimeLabel;
