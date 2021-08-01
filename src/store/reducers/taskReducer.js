import { actionTypes } from '../types';

const initialState = {
  tasks: [],
  edit: false,
  editElem: null,
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TEXT:
      return { ...state, text: action.value };

    case actionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), title: action.title }],
      };

    case actionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };

    // 2 способа передачи аргументов
    case actionTypes.EDIT_TASK:
      let newArr = [...state.tasks];
      newArr = state.tasks.map((task) =>
        task.id === action.id ? { ...task, title: action.title } : task
      );

      return {
        ...state,
        tasks: newArr,
      };
    // case actionTypes.EDIT_TASK:
    //   let newArr = [...state.tasks];
    //   newArr = state.tasks.map((task) =>
    //     task.id === action.data.id
    //       ? { ...task, title: action.data.title }
    //       : task
    //   );
    //   console.log('action.title', action.data.id, action.data.title);

    //   return {
    //     ...state,
    //     tasks: newArr,
    //   };

    case actionTypes.FIND_ID:
      const obj = state.tasks.find((task) => task.id === action.id);

      return {
        ...state,
        editElem: obj,
      };

    case actionTypes.CHANGE_EDIT:
      return {
        ...state,
        edit: action.data,
      };

    default:
      return state;
  }
}

export default taskReducer;
