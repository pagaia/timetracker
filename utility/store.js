import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

import { logger, crashReporter } from "./logger";

const store = createStore(
  rootReducer,
  applyMiddleware(
    logger,
    crashReporter
  )
);

export default store;