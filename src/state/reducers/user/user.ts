import { InitialStateType, UserActionsType } from './types';

import {
  DELETE_USER,
  GET_USERS,
  initialState,
  LOADING,
  SEARCH_USER,
  SET_ERROR,
} from 'constants/index';

export const userReducer = (
  // eslint-disable-next-line default-param-last
  state: InitialStateType = initialState,
  action: UserActionsType,
): InitialStateType => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.users };
    case LOADING:
      return { ...state, isLoading: action.isLoading };
    case SET_ERROR:
      return { ...state, error: action.error };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(({ id }) => id !== action.id),
      };
    case SEARCH_USER:
      return { ...state, search: action.value };
    default:
      return state;
  }
};
