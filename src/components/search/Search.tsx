import React, { ChangeEvent, useEffect, useState } from 'react';

import style from './Search.module.scss';

import { ReturnComponentType } from 'common';
import { DataSearch } from 'enums';
import { useDebounce } from 'hooks';
import { fetchUsers, searchUser, useTypedDispatch } from 'state';

export const Search = (): ReturnComponentType => {
  const dispatch = useTypedDispatch();
  const [value, setValue] = useState<string>('');

  const debouncedValue = useDebounce(value);

  const onClickReset = () => {
    dispatch(fetchUsers());
    setValue('');
  };
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  useEffect(() => {
    dispatch(searchUser(debouncedValue));
  }, [debouncedValue]);

  return (
    <div className={style.search}>
      <input
        type="text"
        onChange={e => onChangeSearch(e)}
        value={value}
        className={style.search_input}
        placeholder={DataSearch.SEARCH}
      />
      <button type="button" onClick={onClickReset} className={style.search_reset}>
        {DataSearch.RESET}
      </button>
    </div>
  );
};
