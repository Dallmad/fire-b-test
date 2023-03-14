import { UserType } from 'common';
import { GET_USERS, LOADING, SET_ERROR, DELETE_USER, SEARCH_USER } from 'constants/index';

export const getUsers = (users: UserType[]) => ({ type: GET_USERS, users } as const);
export const loading = (isLoading: boolean) => ({ type: LOADING, isLoading } as const);
export const setError = (error: string) => ({ type: SET_ERROR, error } as const);
export const deleteUser = (id: number) => ({ type: DELETE_USER, id } as const);
export const searchUser = (value: string) => ({ type: SEARCH_USER, value } as const);
