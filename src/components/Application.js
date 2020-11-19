import React, { Fragment, useContext } from "react";
import logo from "logo.svg";
import "App.css";
import ShowTime from "mainApp/ShowTime";
import { reduxForm } from "redux-form";
import { FORM_NAME } from "mainApp/constant";
import { Switch, Route } from "react-router-dom";
import SignIn from "components/Login/SignIn";
import SignUp from "components/Login/SignUp";
import ProfileIcon from "./Login/ProfileIcon";
import { UserContext } from "../providers/UserProvider";
import ProfilePage from "./Login/ProfilePage";
import MainPage from "../mainApp/MainPage";

let Application = (props) => {
  const userContext = useContext(UserContext);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to <b>Timetracker</b>
        </h1>
        <ProfileIcon />
        <img src={logo} className="App-logo" alt="logo" />
        <ShowTime />
      </header>
      <main>
        {userContext.user ? (
          <div id='login' className="fade-in">
          <Switch>
              <Route path="/profile">
                <ProfilePage />
              </Route>
              <Route path="/">
                <MainPage />
              </Route>
            </Switch>
          </div>
        ) : (
          <div  id='loggedIn' className="fade-in">
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/sign-up">
                <SignUp />
              </Route>
              <Route path="/passworReset">
                <div>Reset passworReset</div>
              </Route>
              <Route path="/">
                <SignIn />
              </Route>
            </Switch>
          </div>
        )}
      </main>
    </div>
  );
};

Application = reduxForm({
  // a unique name for the form
  form: FORM_NAME,
})(Application);

export default Application;
