import { UserType } from 'common';
import { GET_USERS, LOADING, SET_ERROR } from 'constants/index';

export const getUsers = (users: UserType[]) => ({ type: GET_USERS, users } as const);
export const loading = (isLoading: boolean) => ({ type: LOADING, isLoading } as const);
export const setError = (error: string) => ({ type: SET_ERROR, error } as const);
