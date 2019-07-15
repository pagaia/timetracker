import React from "react";
import { Button } from "@material-ui/core";
import ViewTruckedTime from "../components/ViewTruckedTime";
import PropTypes from "prop-types";

const TotalTime = ({ action, totalTime }) => {
  return (
    <div className="total">
      <span>
        <Button variant="contained" color="primary" onClick={action}>
          Update time
        </Button>
      </span>
      <span> Time worked:</span>
      <ViewTruckedTime seconds={totalTime} />
    </div>
  );
};

TotalTime.propTypes = {
  /**
   * the total time in seconds to show
   */
  totalTime: PropTypes.number,
  /**
   * function to call to force update  of the total time
   */
  action: PropTypes.func
};

export default TotalTime;
