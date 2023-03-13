import { initialState } from 'constants/index';
import { getUsers, loading, setError } from 'state';

export type InitialStateType = typeof initialState;
export type UserActionsType =
  | ReturnType<typeof getUsers>
  | ReturnType<typeof loading>
  | ReturnType<typeof setError>;
