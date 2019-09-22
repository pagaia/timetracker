//import { diff } from 'deep-object-diff';
export const logger = store => next => action => {
  let log =
    (sessionStorage.getItem("log") &&
      JSON.parse(sessionStorage.getItem("log"))) ||
    [];
  const time = new Date();
  const now = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}:${time.getMilliseconds()} `;
  console.group(action.type, ` @ ${now}`);
  const oldState = store.getState();
  console.log("current state ", oldState);
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
    const time = new Date();
    const now = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}:${time.getMilliseconds()} `;
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
