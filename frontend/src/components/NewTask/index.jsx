import React, { useState } from 'react';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { api } from '../../api/index.mjs';
import { Container } from './style.js';

function index({ token, getTasks }) {
  const [data, setData] = useState({
    title: '',
    description: '',
    status: 'pending',
  });

  const handleChange = ({ target: { name, value } }) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { title, description, status } = data;
      if (!title || !description || !status) {
        return toast.error('Por favor, preencha todos os campos');
      }
      await api.post(
        '/task',
        {
          title,
          description,
          status,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      await getTasks();
      return toast.success('Tarefa criada com sucesso');
    } catch (error) {
      if (error.response) {
        return toast.error(error.response.data.message);
      }
    }
  };

  return (
    <Container>
      <input
        type='text'
        name='title'
        placeholder='Titulo'
        onChange={handleChange}
      />
      <input
        type='text'
        name='description'
        placeholder='Descrição'
        onChange={handleChange}
      />
      <select name='status' onChange={handleChange}>
        <option value='pending'>Pendente</option>
        <option value='completed'>Completa</option>
        <option value='in progress'>Em progresso</option>
      </select>
      <button type='submit' onClick={handleSubmit}>
        <AiOutlinePlusCircle />
      </button>
    </Container>
  );
}

export default index;
