import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import NewTask from '../../components/NewTask';
import TaskList from '../../components/TaskList';
import { api } from '../../api/index.mjs';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function index() {
  const [tasks, setTasks] = useState([]);
  const [load, setLoad] = useState(true);
  const [userToken, setUserToken] = useState();
  const [filter, setFilter] = useState('');
  const navigation = useNavigate();

  const getTasks = async () => {
    try {
      const { token } = JSON.parse(localStorage.getItem('blitz-user'));
      const { data } = await api.get('/task', {
        headers: {
          authorization: token,
        },
      });
      setUserToken(token);
      if (data[0].task) setTasks(data[0].task);
      setLoad(false);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
      navigation('/');
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  if (load) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Header setFilter={setFilter} />
      <NewTask token={userToken} getTasks={getTasks} />
      <TaskList
        tasks={tasks}
        token={userToken}
        getTasks={getTasks}
        filter={filter}
      />
    </div>
  );
}

export default index;
