import { useDispatch } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';

import { userReducer } from './reducers/user/user';

import { UserActionsType } from 'state';

const rootReducer = combineReducers({
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export const useTypedDispatch = () => useDispatch<TypedDispatch>();

// types
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppActionType = UserActionsType;
export type TypedDispatch = ThunkDispatch<AppRootStateType, any, AppActionType>;
