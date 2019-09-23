import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ShowTime from "./mainApp/ShowTime";
import AddTask from "./mainApp/AddTask";
import TasksList from "./mainApp/TasksList";
import { reduxForm } from "redux-form";
import { FORM_NAME } from "./mainApp/constant";
import ShowPosition from "./components/ShowPosition";

let App = props => {
  const [position, setPosition] = useState(false);

  const onAskPosition = () => {
    setPosition(true);
  };

  const renderButtonPosition = () => {
    if (position) {
      return <ShowPosition />;
    }
    return (
      <button type="button" onClick={onAskPosition}>
        allow position
      </button>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Welcome to <b>Timetracker</b>
        </h2>
        <img src={logo} className="App-logo" alt="logo" />
        <ShowTime />
      </header>
      <main>
        {renderButtonPosition()}
        <AddTask />
        <TasksList />
      </main>
    </div>
  );
};

App = reduxForm({
  // a unique name for the form
  form: FORM_NAME
})(App);
export default App;
