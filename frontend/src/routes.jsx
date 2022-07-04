import { Route, Routes } from 'react-router-dom';

import React from 'react';
import Login from './pages/Login';

function routes() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
    </Routes>
  );
}

export default routes;
