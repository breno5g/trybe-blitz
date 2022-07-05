import styled from 'styled-components';

export const Container = styled.form`
  width: 300px;
  height: 250px;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  margin: 0 auto;
  transform: translateY(-100px);
  border-radius: 0.5rem;
  background-color: #f5f5f5;

  input {
    padding: 10px;
    border-radius: 0.25rem;
    border: 1px solid #33333350;
  }

  input:nth-child(1) {
    width: 100%;
  }

  input:nth-child(2) {
    width: 100%;
  }

  select,
  button {
    padding: 10px;
  }

  button {
    background-color: #78c0d8;
    border: none;
    border-radius: 0.5rem;
    transition: all 0.3s ease;

    svg {
      font-size: 1.5rem;
      color: white;
    }

    &:hover {
      filter: brightness(110%);
    }
  }
`;
