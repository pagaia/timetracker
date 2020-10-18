import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

import { logger, crashReporter } from "./logger";
import reduxLogger from 'redux-logger'

const store = createStore(
  rootReducer,
  applyMiddleware(
    reduxLogger,
    // logger,
    crashReporter
  )
);

export default store;