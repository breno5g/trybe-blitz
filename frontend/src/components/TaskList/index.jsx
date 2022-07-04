import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { BiEdit } from 'react-icons/bi';
import { Container } from './style';

function index(props) {
  return (
    <Container>
      <li>
        <div className='content'>
          <span>Task: </span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            in. Vero voluptates quia Vero voluptates quiaVero voluptates quia
          </p>
        </div>
        <div className='options'>
          <select name='status'>
            <option value='pending'>Pendente</option>
            <option value='completed'>Completa</option>
            <option value='in progress'>Em progresso</option>
          </select>
          <button>
            <TiDeleteOutline />
          </button>
          <button>
            <BiEdit />
          </button>
        </div>
      </li>
    </Container>
  );
}

export default index;
