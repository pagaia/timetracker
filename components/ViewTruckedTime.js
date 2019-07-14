import React from "react";
import PropTypes from "prop-types";

const ViewTruckedTime = ({ seconds }) => {
  if (!seconds) {
    return <span >00:00</span>;
  }
  if (seconds) {
    const measuredTime = new Date(null);
    measuredTime.setSeconds(seconds); // specify value of SECONDS
    const MHSTime = measuredTime.toISOString().substr(11, 8);

    return <span>{MHSTime}</span>;
  }
  return <span>invalid date></span>;
};

ViewTruckedTime.propTypes = {
  /**
   * the seconds to convert
   */
  seconds: PropTypes.number
};
export default ViewTruckedTime;
