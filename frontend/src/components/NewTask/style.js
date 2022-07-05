import styled from 'styled-components';

export const Container = styled.form`
  width: 80%;
  padding: 1rem 3rem;
  display: flex;
  gap: 10px;
  margin: 0 auto;
  transform: translateX(10%);

  input {
    padding: 0 10px;
    border-radius: 0.25rem;
    border: 1px solid #33333350;
  }

  input:nth-child(1) {
    width: 10%;
  }

  input:nth-child(2) {
    width: 50%;
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
