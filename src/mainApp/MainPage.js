import React, { Fragment, useState } from "react";
import "App.css";
import AddTask from "mainApp/AddTask";
import TasksList from "mainApp/TasksList";
// import ShowPosition from "components/ShowPosition";

const MainPage = (props) => {
//   const [position, setPosition] = useState(false);

//   const onAskPosition = () => {
//     setPosition(true);
//   };

//   const renderButtonPosition = () => {
//     if (position) {
//       return <ShowPosition />;
//     }
//     return (
//       <button type="button" onClick={onAskPosition}>
//         allow position
//       </button>
//     );
//   };
  return (
    <Fragment>
      {/* {renderButtonPosition()} */}
      <AddTask />
      <TasksList />
    </Fragment>
  );
};

export default MainPage;
