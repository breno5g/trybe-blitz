/* eslint-disable react/prop-types */
import Modal from 'react-modal';
import { Container } from './style';
import { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { api } from '../../api/index.mjs';

import Select from 'react-select';
import './modal.scss';

const defaultData = {
  title: '',
  description: '',
  status: '',
};

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

Modal.setAppElement('#root');

function Edit({ isOpen, onRequestClose, task, getTasks, token }) {
  const [data, setData] = useState({
    ...defaultData,
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
      await api.put(
        '/task',
        {
          title,
          description,
          status,
          id: task.id,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setData({ ...defaultData });
      toast.success('Tarefa editada com sucesso');
      getTasks();
      onRequestClose();
    } catch (error) {
      if (error.response) {
        return toast.error(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    if (task.title) {
      setData({
        title: task.title,
        description: task.description,
        status: task.status,
      });
    }
  }, [task]);

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button onClick={onRequestClose} className='react-modal-close'>
        <GrClose />
      </button>
      <Container>
        <input
          type='text'
          name='title'
          placeholder='Titulo'
          onChange={handleChange}
          value={data.title}
        />
        <input
          type='text'
          name='description'
          placeholder='Descrição'
          onChange={handleChange}
          value={data.description}
        />
        <Select
          className='status'
          options={options}
          name='status'
          defaultValue={
            options.filter((option) => option.value === task.status)[0]
          }
          onChange={({ value }) => {
            handleChange({ target: { name: 'status', value } });
          }}
        ></Select>
        <button type='submit' onClick={handleSubmit}>
          <AiOutlinePlusCircle />
        </button>
      </Container>
    </Modal>
  );
}

export default Edit;
