import initialState from "../initialState";
import { actionTypes } from "../actions";

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_LOADING:
      return { ...state, loading: payload };
    default:
      return { ...state };
  }
};

export default reducer;
