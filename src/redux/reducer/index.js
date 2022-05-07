import initialState from "../initialState";
import { actionTypes } from "../actions";

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_LOADING:
      return { ...state, loading: payload };
    case actionTypes.GET_DATA:
      return { ...state, loading: false, searchVideos: payload };
    case actionTypes.ERROR_OCCURED:
      return {
        ...state,
        loading: false,
        error: { open: true, message: payload.message, code: payload.code },
      };
    case actionTypes.CLEAR_ERROR:
      return { ...state, error: { open: false, message: "", code: 0 } };
    default:
      return { ...state };
  }
};

export default reducer;
