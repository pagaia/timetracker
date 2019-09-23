import React from "react";
import { usePosition } from "../hooks/usePosition";

const ShowPosition = props => {
  const { latitude, longitude, error } = usePosition();

  return (
    <code>
      latitude: {latitude}
      <br />
      longitude: {longitude}
      <br />
      error: {error}
    </code>
  );
};

export default ShowPosition;