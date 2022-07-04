import React from 'react';
import Header from '../../components/Header';
import NewTask from '../../components/NewTask';
import TaskList from '../../components/TaskList';

function index() {
  return (
    <div>
      <Header />
      <NewTask />
      <TaskList />
    </div>
  );
}

export default index;
