import { actionTypes } from '../types';

export function addTask(title) {
  return {
    type: actionTypes.ADD_TASK,
    title,
  };
}

export function deleteTask(id) {
  return {
    type: actionTypes.DELETE_TASK,
    id,
  };
}

export const addText = (value) => ({
  type: actionTypes.ADD_TEXT,
  value,
});

// 2 способа передачи параметров
export function editTask(id, title) {
  return {
    type: actionTypes.EDIT_TASK,
    id,
    title,
  };
}
// export function editTask(data) {
//   return {
//     type: actionTypes.EDIT_TASK,
//     data,
//   };
// }

export function findeId(id) {
  return {
    type: actionTypes.FIND_ID,
    id,
  };
}

export function toggleModeAction(data) {
  return {
    type: actionTypes.TOGGLE_MODE,
    data,
  };
}
