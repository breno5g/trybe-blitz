import styled from 'styled-components';

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1366px;
  margin: 0 auto;

  section,
  aside {
    padding: 2.5rem;
    height: 100vh;
    max-height: 720px;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    background-color: #78c0d8;
    color: white;

    main {
      /* border-bottom: 1px dashed #f5f5f5; */
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 50px;
        margin-bottom: 0.5rem;
      }

      h1 {
        text-align: center;
        font-size: 3rem;
        margin-bottom: 1.3rem;
        font-weight: 300;
      }

      .separator {
        width: 150px;
      }
    }
    p {
      max-width: 75%;
      text-align: center;
      margin: 0 auto;
      margin-bottom: 1rem;
    }

    .infos {
      p {
        font-weight: 300;
      }
    }
  }
`;

export const Container = styled.aside`
  background-color: #f1f5f6;

  .forms-container {
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 0.7rem;
    box-shadow: 0 0 10px 0 #c5cbcb;
    width: 90%;
    margin: 0 auto;

    h1 {
      color: #adbdbd;
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
      margin-bottom: 0.5rem;
    }

    legend {
      color: #c5cbcb;
      text-align: center;
      margin-bottom: 0.5rem;
    }

    fieldset {
      border: none;
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;

      input {
        padding: 0.8rem;
        border: 1px solid #e7ebea;

        &:first-child {
          border-radius: 0.5rem 0.5rem 0 0;
        }

        &:last-child {
          border-radius: 0 0 0.5rem 0.5rem;
        }

        &::placeholder {
          color: #b3c3c4;
          font-weight: 700;
        }
      }
    }

    button {
      padding: 0.5rem 2rem;
      border-radius: 0.5rem;
      border: none;
      font-weight: 700;
      font-size: 1rem;
      color: white;
      background-color: #78bfd6;
      margin-left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
      transition: all 0.5s ease;

      &:hover {
        filter: brightness(110%);
      }
    }

    form:first-of-type {
      padding-bottom: 1rem;
      border-bottom: 1px solid #e5e5e5;
    }

    form:last-of-type {
      margin-top: 0.5rem;
      button {
        background-color: #94e8ba;
      }
    }
  }
`;
