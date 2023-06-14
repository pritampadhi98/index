import { SELECT_VALUES_SUCCESS } from "../../constants/index";
const initialState = {};

export const contentCheckPayLoad = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_VALUES_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
