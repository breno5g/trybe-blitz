import React from 'react';
import { Container } from './style';

import logoImg from '../../assets/Logo.svg';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';

function index() {
  return (
    <Container>
      <div className='logo'>
        <img src={logoImg} alt='checkspace' />
        <h1>CheckSpace</h1>
      </div>
      <div className='search'>
        <label htmlFor=''>
          <AiOutlineSearch />
          <input type='text' placeholder='Pesquise por uma tarefa...' />
        </label>
      </div>
      <div className='user'>
        <span>breno5g</span>
        <FaRegUser />
      </div>
    </Container>
  );
}

export default index;
