//import { diff } from 'deep-object-diff';
export const logger = store => next => action => {
  let log =
    (sessionStorage.getItem("log") &&
      JSON.parse(sessionStorage.getItem("log"))) ||
    [];
  console.group(action.type);
  const oldState = store.getState();
  console.log("current state", oldState);
  console.info(`dispatching`, action);
  let result = next(action);
  const newState = store.getState();
  console.log("next state", newState);
  //  console.info('state diff', diff(oldState, newState))

  log.push({
    oldState,
    action,
    newState
  });
  console.log(log);
  sessionStorage.setItem("log", JSON.stringify(log));
  console.groupEnd();
  return result;
};

export const crashReporter = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.error("Caught an exception!", err);
    let error =
      (sessionStorage.getItem("error") &&
        JSON.parse(sessionStorage.getItem("error"))) ||
      [];
    error.push({
      err,
      extra: {
        action,
        state: store.getState()
      }
    });
    sessionStorage.setItem("error", JSON.stringify(error));
    throw err;
  }
};
