import { InitialStateType, UserActionsType } from './types';

import { GET_USERS, initialState, LOADING, SET_ERROR } from 'constants/index';

export const userReducer = (
  // eslint-disable-next-line default-param-last
  state: InitialStateType = initialState,
  action: UserActionsType,
): InitialStateType => {
  switch (action.type) {
    case GET_USERS:
      // @ts-ignore
      return { ...state, users: action.users };
    case LOADING:
      return { ...state, isLoading: action.isLoading };
    case SET_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
