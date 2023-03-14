import { AddressType } from 'common/types/AddressType';
import { CompanyType } from 'common/types/CompanyType';
import { initialState } from 'constants/index';
import { deleteUser, getUsers, loading, searchUser, setError } from 'state/actions/user';
import { InitialStateType } from 'state/reducers/user/types';
import { userReducer } from 'state/reducers/user/user';

let startState: InitialStateType = initialState;

beforeEach(() => {
  startState = {
    users: [],
    isLoading: false,
    error: '',
    search: '',
  };
});

test('correct get users', () => {
  const action = getUsers([
    {
      id: 56,
      name: 'Dzmitry',
      username: 'Dallmad',
      email: 'sdgsd@gmail.com',
      address: {} as AddressType,
      phone: '',
      website: '',
      company: {} as CompanyType,
    },
  ]);

  const endState = userReducer(startState, action);

  expect(endState.users.length).not.toEqual(startState.users.length);
  expect(endState.users.find(({ id }) => id === 56)).not.toBeUndefined();
});

test('correct delete user', () => {
  const action = getUsers([
    {
      id: 56,
      name: 'Dzmitry',
      username: 'Dallmad',
      email: 'sdgsd@gmail.com',
      address: {} as AddressType,
      phone: '',
      website: '',
      company: {} as CompanyType,
    },
  ]);
  const middleState = userReducer(startState, action);

  expect(middleState.users.length).toBe(1);
  const deleteAction = deleteUser(56);

  const endState = userReducer(startState, deleteAction);

  expect(endState.users.length).toBe(0);
});

test('correct set search value', () => {
  const action = searchUser('ae');

  const endState = userReducer(startState, action);

  expect(endState.search).toBe('ae');
});

test('correct set error value', () => {
  const action = setError('Something went wrong');

  const endState = userReducer(startState, action);

  expect(endState.error).toBe('Something went wrong');
});

test('correct set loading', () => {
  const action = loading(true);

  const endState = userReducer(startState, action);

  expect(endState.isLoading).toBe(true);
});
