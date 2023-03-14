import React, { useEffect, useMemo } from 'react';

import { useSelector } from 'react-redux';

import style from './Main.module.scss';

import { ReturnComponentType, UserType } from 'common';
import { Search } from 'components';
import { Header } from 'features/main/header/Header';
import { User } from 'features/main/user/User';
import { AppRootStateType, fetchUsers, useTypedDispatch } from 'state';
import { InitialStateType } from 'state/reducers/user/types';

export const Main = (): ReturnComponentType => {
  const dispatch = useTypedDispatch();
  const { users, isLoading, error, search } = useSelector<
    AppRootStateType,
    InitialStateType
  >(state => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const checkSearch = useMemo(() => {
    return users?.map(
      (user: UserType) =>
        (user.name.includes(search) ||
          user.username.includes(search) ||
          user.email.includes(search)) && (
          <User key={user.id} user={user} search={search} />
        ),
    );
  }, [search, users]);

  return (
    <div className={style.main}>
      {isLoading && <div className={style.main_loading}>Loading...</div>}

      <Header />
      <div className={style.main_box}>{checkSearch} </div>
      <Search />
      {error && <div className={style.main_error}>{error}</div>}
    </div>
  );
};
