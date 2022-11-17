import { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Rings } from 'react-loader-spinner';
import styled from 'styled-components';
import axios from 'axios';
import UserContext from '../UserContext';

export default function SignUpPage() {

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [formEnabled, setFormEnabled] = useState(true);
  const [form, SetForm] = useState({ email: '', password: '' });

  const user = JSON.parse(localStorage.getItem('MyWallet'));

  useEffect(() => {
    if (user !== null) {
      navigate('/wallet');
      setUser(user);
    }
  }, []);

  function handleForm(e) {
    const { name, value } = e.target
    SetForm({ ...form, [name]: value })
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function spinner() {
    return (
      <Rings
        height='50'
        width='50'
        color='#7202F7'
        radius='4'
      />
    );
  }

  async function signIn(e) {
    setFormEnabled(false);
    e.preventDefault();
    await sleep(5 * 1000)
    /* axios.post(SIGN_IN_URL, form)
      .then(res => {
        setUser(res.data);
        localStorage.setItem('MyWallet', JSON.stringify(res.data));
        navigate('/wallet');
      })
      .catch(err => {
        toast.error(`Erro: ${err.response.data.message}`, {
          position: toast.POSITION.TOP_CENTER,
          theme: 'colored',
        });
        setFormEnabled(true);
      }); */
    setFormEnabled(true);
  }

  return (
    <PageContainer>
      <ToastContainer />
      <Logo title='Página inicial'>MyWallet</Logo>
      <Form onSubmit={signIn}>
        <Input
          type='email'
          placeholder='E-mail'
          name='email'
          value={form.email}
          onChange={handleForm}
          disabled={!formEnabled}
          required
        />

        <Input
          type='password'
          placeholder='Senha'
          name='password'
          value={form.password}
          onChange={handleForm}
          disabled={!formEnabled}
          required
        />

        <Button
          type='submit'
          title={formEnabled ? 'Fazer login' : 'aguarde...'}
          disabled={!formEnabled}
        >
          {formEnabled ? 'Entrar' : spinner()}
        </Button>
      </Form>
      <Link to='/signup'>
        <ButtonSwap
          title={formEnabled ? 'Fazer cadastro' : 'aguarde...'}
          disabled={!formEnabled}
        >
          Primeira vez? Cadastre-se!
        </ButtonSwap>
      </Link>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
	background: linear-gradient(-45deg, #8C11BE, #6F00FF, #8C11BE, #6F00FF);
	background-size: 400% 400%;
  padding: 5%;
  box-sizing: border-box;
	animation: gradient 10s ease infinite;
  transition: 2s;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &:hover {
    cursor: default;
  }
`;

const Logo = styled.button`
  font-family: 'Saira Stencil One', sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  margin: 24px 0px;
  color: #FFFFFF;
  transition: 1s;
  border: none;
  outline: none;
  background-color: transparent;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
}
`;

const Form = styled.form`
  max-width: 330px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 58px;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
  background-color: #FFFFFF;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 0px 15px;
  margin-bottom: 13px;
  box-sizing: border-box;
  
  &::placeholder {
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    color: #AFAFAF;
    background-color: #F2F2F2;
    -webkit-text-fill-color: #AFAFAF;
    -webkit-box-shadow: 0 0 0px 45px #F2F2F2 inset;
    box-shadow: 0 0 0px 45px #F2F2F2 inset;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 46px;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #FFFFFF;
  background-color: rgba(255, 255, 255, .15);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  border: none;
  outline: none;
  transition: 1s;

  &:hover {
    background-color: rgba(255, 255, 255, .30);
    transform: scale(1.05);
    cursor: pointer;
  }

  &:disabled {
    transform: none;
    background-color: rgba(255, 255, 255, .15);
    cursor: default;
  }
`;

const ButtonSwap = styled.button`
  font-family: 'Raleway';
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  margin: 36px 0px;
  box-sizing: border-box;
  background-color: transparent;
  color: rgba(255, 255, 255, .80);
  border: none;
  outline: none;
  transition: 1s;

  &:hover {
    color: rgba(255, 255, 255, 1);
    transform: scale(1.1);
    cursor: pointer;
  }

  &:disabled {
    transform: none;
    color: rgba(255, 255, 255, .80);
    cursor: default;
  }
`;