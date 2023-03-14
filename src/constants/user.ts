export const GET_USERS = 'GET_USERS';
export const SET_ERROR = 'SET-ERROR';
export const LOADING = 'LOADING';
export const DELETE_USER = 'DELETE_USER';
export const SEARCH_USER = 'SEARCH_USER';

export const initialState = {
  users: [],
  isLoading: false,
  error: '',
  search: '',
};
