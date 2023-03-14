import React from 'react';

import style from './Header.module.scss';

import { ReturnComponentType } from 'common';
import { DataHeader } from 'enums';

export const Header = (): ReturnComponentType => {
  return (
    <div className={style.header}>
      <h3 className={style.header_title}>{DataHeader.NAME}</h3>
      <h3 className={style.header_title}>{DataHeader.USER_NAME}</h3>
      <h3 className={style.header_title}>{DataHeader.EMAIL}</h3>
    </div>
  );
};
