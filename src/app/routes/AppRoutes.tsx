import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { ReturnComponentType } from 'common';
import { PATH } from 'enums';
import { Main, Error404 } from 'features';

export const AppRoutes = (): ReturnComponentType => {
  return (
    <div>
      <Routes>
        <Route path={PATH.MAIN} element={<Main />} />
        <Route path={PATH.ERROR404} element={<Error404 />} />
        <Route path={PATH.ANOTHER} element={<Navigate to={PATH.ERROR404} />} />
      </Routes>
    </div>
  );
};
