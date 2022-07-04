import React, { useEffect, useState } from 'react';
import { Container } from './style';

import logoImg from '../../assets/Logo.svg';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';

function index({ setFilter }) {
  const [userData, setUserdata] = useState('');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('blitz-user'));
    setUserdata(data);
  }, []);

  const filter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <Container>
      <div className='logo'>
        <img src={logoImg} alt='checkspace' />
        <h1>CheckSpace</h1>
      </div>
      <div className='search'>
        <label htmlFor=''>
          <AiOutlineSearch />
          <input
            type='text'
            placeholder='Pesquise por uma tarefa...'
            onChange={filter}
          />
        </label>
      </div>
      <div className='user'>
        <span>{userData.username}</span>
        <FaRegUser />
      </div>
    </Container>
  );
}

export default index;
