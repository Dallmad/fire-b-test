import { requestAPI } from 'api';
import { getUsers, loading, setError, TypedDispatch } from 'state';

export const fetchUsers = () => async (dispatch: TypedDispatch) => {
  dispatch(loading(true));
  try {
    const { data } = await requestAPI.getUsers();

    dispatch(getUsers(data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setError(error.message));
    }
  } finally {
    dispatch(loading(false));
  }
};
