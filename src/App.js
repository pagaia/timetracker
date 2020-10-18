import React from "react";
import "./App.css";
import Application from "./components/Application";
import UserProvider from "./providers/UserProvider";
import { HashRouter as Router } from "react-router-dom";

let App = () => {
  return (
    <UserProvider>
      <Router>
        <Application />
      </Router>
    </UserProvider>
  );
};

export default App;
