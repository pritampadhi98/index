import { BRAND_NAME_SUCCESS } from "../../constants/index";
const initialState = {};

export const contentPayLoad = (state = initialState, action) => {
  switch (action.type) {
    case BRAND_NAME_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
