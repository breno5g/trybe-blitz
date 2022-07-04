import React from 'react';
import { Container, MainContainer } from './style';
import logoImg from '../assets/Logo.svg';
import separatorImg from '../assets/Separator.svg';

function Login() {
  return (
    <MainContainer>
      <section>
        <main>
          <img src={logoImg} alt='checkSpace' />
          <h1>CheckSpace</h1>
          <p>
            Proporcionando um gerenciamento de tarefas facilitado, diferenciado
            e open-source.
          </p>
          <img src={separatorImg} alt='separator' className='separator' />
        </main>
        <div className='infos'>
          <p>
            Ajude outras pessoas a descobrir as maravilhas do gerenciamento de
            tarefas simplificado, principalmente aquelas pessoas com quem você
            se importa :).
          </p>
          <p>
            Um bom começo seria compartilhando com a gente e com o mundo o
            quanto a CheckSpace tem impactado na sua{' '}
            <strong>produtividade</strong>.
          </p>
          <p>
            Mostre pra gente que se organizar é o primeiro passo para o sucesso!
          </p>
        </div>
      </section>
      <Container>
        <div className='forms-container'>
          <form>
            <h1>Login</h1>
            <legend>Já possui conta? Então bora organizar a vida!</legend>
            <fieldset>
              <input type='text' placeholder='Email' />
              <input type='password' placeholder='Senha' />
            </fieldset>
            <button type='submit'>Entrar</button>
          </form>
          <form>
            <h1>Sign-up</h1>
            <legend>Não possui conta? Gente, o que você tá esperando!?</legend>
            <fieldset>
              <input type='text' placeholder='Username' />
              <input type='text' placeholder='Email' />
              <input type='password' placeholder='Senha' />
            </fieldset>
            <button type='submit'>Registrar</button>
          </form>
        </div>
      </Container>
    </MainContainer>
  );
}

export default Login;
