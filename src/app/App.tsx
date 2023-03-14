import React from 'react';

import style from './App.module.scss';

import { AppRoutes } from 'app';

export const App = () => {
  return (
    <div className={style.app}>
      <AppRoutes />
    </div>
  );
};
