import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ShowTime from "./mainApp/ShowTime";
import AddTask from "./mainApp/AddTask";
import TasksList from "./mainApp/TasksList";
import { reduxForm } from "redux-form";
import { FORM_NAME } from "./mainApp/constant";


let App = props => {
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
