const types = {
  ADD_TASK: "ADD_TASK",
  SET_ACTIVE_TASK: "SET_ACTIVE_TASK",
  REMOVE_TASK: "REMOVE_TASK"
};
const initialState = {
  tasks: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            name: action.payload
          }
        ]
      };
    case types.SET_ACTIVE_TASK:
      return {
        ...state,
        activeTask: action.payload
      };
    case types.REMOVE_TASK:
      const newList = state.tasks.filter((task, idx) => idx !== action.payload);
      return {
        ...state,
        tasks: [...newList]
      };
    default:
      return state;
  }
};

export const actions = {
  addTask: taskName => ({
    type: types.ADD_TASK,
    payload: taskName
  }),
  remove: index => ({
    type: types.REMOVE_TASK,
    payload: index
  }),
  setActiveTask: index => ({
    type: types.SET_ACTIVE_TASK,
    payload: index
  })
};
