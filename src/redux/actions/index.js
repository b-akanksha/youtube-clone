export const actionTypes = {
  SET_LOADING: "SET_LOADING",
};

export const setLoading = (payload) => ({
  type: actionTypes.SET_LOADING,
  payload,
});
