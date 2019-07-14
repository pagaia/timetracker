import React from "react";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./utility/store";

const mountApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

export default mountApp;
