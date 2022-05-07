export const actionTypes = {
  SET_LOADING: "SET_LOADING",
  GET_DATA: "GET_DATA",
  ERROR_OCCURED: "ERROR_OCCURED",
  CLEAR_ERROR: "CLEAR_ERROR",
};

export const setLoading = (payload) => ({
  type: actionTypes.SET_LOADING,
  payload,
});

export const getData = (payload) => ({
  type: actionTypes.GET_DATA,
  payload,
});

export const setError = (payload) => ({
  type: actionTypes.ERROR_OCCURED,
  payload,
});

export const clearError = () => ({
  type: actionTypes.CLEAR_ERROR,
});
