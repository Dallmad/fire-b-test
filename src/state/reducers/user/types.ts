import { initialState } from 'constants/index';
import { deleteUser, getUsers, loading, searchUser, setError } from 'state';

export type InitialStateType = typeof initialState;
export type UserActionsType =
  | ReturnType<typeof getUsers>
  | ReturnType<typeof loading>
  | ReturnType<typeof setError>
  | ReturnType<typeof deleteUser>
  | ReturnType<typeof searchUser>;
