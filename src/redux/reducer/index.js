import initialState from "../initialState";
import { actionTypes } from "../actions";

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_LOADING:
      return { ...state, loading: payload };
    case actionTypes.GET_DATA:
      if (payload.length) {
        return {
          ...state,
          loading: false,
          searchVideos: payload,
          selectedVideo: payload[0],
        };
      }
      break;
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
