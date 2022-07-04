import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { BiEdit } from 'react-icons/bi';
import { Container } from './style';
import Select from 'react-select';
import { api } from '../../api/index.mjs';
import { toast } from 'react-toastify';

const options = [
  {
    value: 'pending',
    label: 'Pendente',
  },
  {
    value: 'completed',
    label: 'Completo',
  },
  {
    value: 'in progress',
    label: 'Em progresso',
  },
];

function index(props) {
  const { tasks, token, getTasks } = props;

  const deleteTask = async (id) => {
    try {
      await api.delete(`/task/${id}`, {
        headers: {
          authorization: token,
        },
      });
      getTasks();
      return toast.success('Tarefa deletada com sucesso');
    } catch (error) {
      return toast.error(error.message);
    }
  };

  return (
    <Container>
      {tasks?.map((task) => (
        <li key={task.id}>
          <div className='content'>
            <span>{task.title}: </span>
            <p>{task.description}</p>
          </div>
          <div className='options'>
            <Select
              className='status'
              options={options}
              defaultValue={{ value: task.status, label: task.status }}
            ></Select>
            <button onClick={() => deleteTask(task.id)}>
              <TiDeleteOutline />
            </button>
            <button>
              <BiEdit />
            </button>
          </div>
        </li>
      ))}
    </Container>
  );
}

export default index;
