import styled from 'styled-components';

export const Container = styled.ul`
  padding: 1.5rem 3rem;

  li {
    display: flex;
    list-style: none;
    display: grid;
    grid-template-columns: 8fr 4fr;
    padding: 10px;
    border-radius: 0.25rem;
    box-shadow: 0 5px 5px #33333330;
    align-items: center;
    font-size: 16px;

    .content {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .options {
      display: flex;
      gap: 0.5rem;
      justify-content: flex-end;

      .status {
        cursor: pointer;
      }

      button {
        width: 50px;
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: all 0.3s;

        svg {
          font-size: 2rem;
          color: white;
        }

        &:first-of-type {
          background-color: #f7567c;
        }

        &:last-of-type {
          background-color: #99e1d9;
        }

        &:hover {
          filter: brightness(110%);
        }
      }
    }
  }
`;
