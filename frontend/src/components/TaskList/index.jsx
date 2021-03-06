// import React, { useEffect, useState } from 'react';
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
    value: 'done',
    label: 'Completo',
  },
  {
    value: 'in progress',
    label: 'Em progresso',
  },
];

function index(props) {
  const { tasks, token, getTasks, filter, onRequestClose } = props;

  const deleteTask = async (id) => {
    try {
      await api.delete(`/task/${id}`, {
        headers: {
          authorization: token,
        },
      });
      await getTasks();
      return toast.success('Tarefa deletada com sucesso');
    } catch (error) {
      return toast.error(error.message);
    }
  };

  const updateStatus = async (data, newStatus) => {
    try {
      await api.put(
        'task',
        { ...data, status: newStatus },
        { headers: { authorization: token } }
      );
      await getTasks();
      return toast.success('Status atualizado com sucesso');
    } catch (error) {
      if (error.response.data.message) {
        return toast.error(error.response.data.message);
      }
    }
  };

  return (
    <Container>
      {tasks
        ?.filter((task) => task.title.includes(filter))
        .map((task) => (
          <li key={task.id}>
            <div className='content'>
              <span>{task.title}: </span>
              <p>{task.description}</p>
            </div>
            <div className='options'>
              <Select
                className='status'
                options={options}
                defaultValue={
                  options.filter((option) => option.value === task.status)[0]
                }
                onChange={({ value }) => updateStatus(task, value)}
              ></Select>
              <button onClick={() => deleteTask(task.id)}>
                <TiDeleteOutline />
              </button>
              <button onClick={() => onRequestClose(task)}>
                <BiEdit />
              </button>
            </div>
          </li>
        ))}
    </Container>
  );
}

export default index;
