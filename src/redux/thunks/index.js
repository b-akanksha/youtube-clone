import { clearError, getData, setError, setLoading } from "../actions";
import { searchService } from "../service";

export const searchThunk = (keyword) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await searchService(keyword);
      if (response.status === 200) {
        dispatch(clearError());
        dispatch(getData(response.data.items));
      } else {
        throw new Error({
          message: response.error.message,
          code: response.error.code,
        });
      }
    } catch (error) {
      dispatch(setError({ message: error.message, code: error.code }));
    }
  };
};
