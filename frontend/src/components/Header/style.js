import styled from 'styled-components';

export const Container = styled.header`
  background-color: #78c0d8;
  height: 50px;
  padding: 0 1rem;
  color: #dcf5f7;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  .logo {
    display: flex;
    height: 100%;
    align-items: center;
    gap: 0.5rem;

    h1 {
      font-weight: 300;
    }

    img {
      width: 30px;
    }
  }

  .search {
    label {
      position: relative;

      svg {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0px;
        right: 10px;
        color: #f2f5f6;
      }

      input {
        width: 100%;
        padding: 0.3rem;
        border: none;
        border-radius: 0.25rem;
        background-color: #dcf5f770;

        &::placeholder {
          color: #ffffff;
        }
      }
    }
  }
  .user {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.25rem;
  }
`;
