const types = {
  ADD_TASK: "ADD_TASK",
  CHANGE_TASK_NAME: "CHANGE_TASK_NAME",
  SET_ACTIVE_TASK: "SET_ACTIVE_TASK",
  REMOVE_TASK: "REMOVE_TASK",
  UPDATE_TOTALS: "UPDATE_TOTALS",
  FORCE_UPDATE: "FORCE_UPDATE"
};
const initialState = {
  tasks: [],
  forceUpdate: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      // if there is already a task with the same name don't add
      if (state.tasks.find(task => task.name === action.payload)) {
        return {
          ...state
        };
      }
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            name: action.payload
          }
        ]
      };
    case types.CHANGE_TASK_NAME: {
      const { taskName, id } = action.payload;
      const newList = state.tasks.map((task, idx) => {
        if (idx === id) {
          task.name = taskName;
        }
        return task;
      });

      return {
        ...state,
        tasks: [...newList]
      };
    }
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
    case types.UPDATE_TOTALS: {
      let totalTime = 0;
      const newList = state.tasks.map((task, idx) => {
        const updatedTask = { ...task };
        if (idx === action.payload.index) {
          updatedTask.time = action.payload.time;
        }
        totalTime = totalTime + updatedTask.time;
        return updatedTask;
      });

      return {
        ...state,
        tasks: [...newList],
        totalTime
      };
    }
    case types.FORCE_UPDATE:
      return {
        ...state,
        forceUpdate: state.forceUpdate + 1
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
  changeTaskName: (taskName, id) => ({
    type: types.CHANGE_TASK_NAME,
    payload: { taskName, id }
  }),
  remove: index => ({
    type: types.REMOVE_TASK,
    payload: index
  }),
  setActiveTask: index => ({
    type: types.SET_ACTIVE_TASK,
    payload: index
  }),
  updateTotalTime: (index, time) => ({
    type: types.UPDATE_TOTALS,
    payload: { index, time }
  }),
  forceUpdate: () => ({
    type: types.FORCE_UPDATE
  })
};
