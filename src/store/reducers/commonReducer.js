import { actionTypes } from '../types';

const initialState = {
  toggleMode: false,
};

function commonReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_MODE:
      return {
        ...state,
        toggleMode: action.data,
      };

    default:
      return state;
  }
}

export default commonReducer;
