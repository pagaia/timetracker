import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ShowTime from "./mainApp/ShowTime";
import AddTask from "./mainApp/AddTask";
import TasksList from "./mainApp/TasksList";

const App = props => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to <b>Timetracker</b>
        </h1>
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

export default App;
