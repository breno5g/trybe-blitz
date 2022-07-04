import { Route, Routes } from 'react-router-dom';

import React from 'react';
import Login from './pages/Login';
import Tasks from './pages/Tasks';

function routes() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/tasks' element={<Tasks />} />
    </Routes>
  );
}

export default routes;
