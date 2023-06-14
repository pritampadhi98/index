import { BRAND_NAME_SUCCESS, SELECT_VALUES_SUCCESS } from "../constants/index";
export const addedBrandVal = (Val) => async (dispatch) => {
  dispatch({
    type: BRAND_NAME_SUCCESS,
    payload: Val,
  });
};
export const addedSelectVal = (Val) => async (dispatch) => {
  dispatch({
    type: SELECT_VALUES_SUCCESS,
    payload: { [Val]: 1 },
  });
};
