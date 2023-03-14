import React from 'react';

import style from './Header.module.scss';

import { ReturnComponentType } from 'common';

export const Header = (): ReturnComponentType => {
  return (
    <div className={style.header}>
      <h3 className={style.header_title}>Name</h3>
      <h3 className={style.header_title}>User name</h3>
      <h3 className={style.header_title}>Email</h3>
    </div>
  );
};
