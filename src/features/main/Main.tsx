import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { ReturnComponentType, UserType } from 'common';
import { useTypedDispatch, fetchUsers, AppRootStateType } from 'state';
import { InitialStateType } from 'state/reducers/user/types';

export const Main = (): ReturnComponentType => {
  const dispatch = useTypedDispatch();
  const { users, isLoading, error } = useSelector<AppRootStateType, InitialStateType>(
    state => state.user,
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        users?.map((user: UserType) => <div key={user.id}>{user.name}</div>)
      )}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};
