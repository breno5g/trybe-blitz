import React from 'react';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Container } from './style.js';

function index(props) {
  return (
    <Container>
      <input type='text' placeholder='Titulo' />
      <input type='text' placeholder='Descrição' />
      <select name='status'>
        <option value='pending'>Pendente</option>
        <option value='completed'>Completa</option>
        <option value='in progress'>Em progresso</option>
      </select>
      <button type='submit'>
        <AiOutlinePlusCircle />
      </button>
    </Container>
  );
}

export default index;
