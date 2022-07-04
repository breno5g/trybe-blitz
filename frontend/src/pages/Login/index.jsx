import { useState } from 'react';
import { Container, MainContainer } from './style';
import logoImg from '../../assets/Logo.svg';
import separatorImg from '../../assets/Separator.svg';
import { toast } from 'react-toastify';
import { loginSchema, registerSchema } from '../../schemas/user.schema';
import { api } from '../../api/index.mjs';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigation = useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [register, setRegister] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleFormChange = ({ target: { name, value } }) => {
    const inputName = name.split('-');
    if (inputName[0] === 'login') {
      setLogin({
        ...login,
        [inputName[1]]: value,
      });
    } else {
      setRegister({
        ...register,
        [inputName[1]]: value,
      });
    }
  };

  const loginSubmit = async (e) => {
    try {
      e.preventDefault();
      const { email, password } = login;
      if (!email || !password) {
        return toast.error('Por favor, preencha todos os campos');
      }
      await loginSchema.validate({ email, password });
      const user = await api.post('/user/login', {
        email,
        password,
      });
      localStorage.setItem('blitz-user', JSON.stringify(user.data));
      navigation('/tasks');
    } catch (error) {
      if (error.response) {
        return toast.error(error.response.data.message);
      }
      return toast.error(error.message);
    }
  };

  const registerSubmit = async (e) => {
    try {
      e.preventDefault();
      const { email, password, username } = register;
      if (!email || !password || !username) {
        return toast.error('Por favor, preencha todos os campos');
      }
      await registerSchema.validate({ username, email, password });
      const { data } = await api.post('/user/register', {
        username,
        email,
        password,
      });
      toast.success(data.message);
    } catch (error) {
      if (error.response) {
        return toast.error(error.response.data.message);
      }
      toast.error(error.message);
    }
  };

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
              <input
                type='email'
                name='login-email'
                placeholder='Email'
                onChange={handleFormChange}
              />
              <input
                type='password'
                name='login-password'
                placeholder='Senha'
                onChange={handleFormChange}
              />
            </fieldset>
            <button type='submit' onClick={loginSubmit}>
              Entrar
            </button>
          </form>
          <form>
            <h1>Sign-up</h1>
            <legend>Não possui conta? Gente, o que você tá esperando!?</legend>
            <fieldset>
              <input
                type='text'
                name='register-username'
                placeholder='Username'
                onChange={handleFormChange}
              />
              <input
                type='text'
                name='register-email'
                placeholder='Email'
                onChange={handleFormChange}
              />
              <input
                type='password'
                name='register-password'
                placeholder='Senha'
                onChange={handleFormChange}
              />
            </fieldset>
            <button type='submit' onClick={registerSubmit}>
              Registrar
            </button>
          </form>
        </div>
      </Container>
    </MainContainer>
  );
}

export default Login;
