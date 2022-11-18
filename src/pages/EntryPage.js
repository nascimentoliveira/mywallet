import styled from 'styled-components';
import WalletContext from '../WalletContext';
import { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Rings } from 'react-loader-spinner';

export default function EntryPage() {

  const { edit, entryType, entry, setEntry } = useContext(WalletContext);
  const [formEnabled, setFormEnabled] = useState(true);
  const navigate = useNavigate();

  function handleForm(e) {
    const { name, value } = e.target;
    setEntry({ ...entry, [name]: value });
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

  async function handleClick(e) {
    setFormEnabled(false);
    e.preventDefault();
    await sleep(10 * 1000);
    setFormEnabled(true);
    navigate('/wallet');
  }

  return (
    <PageContainer>
      <Link to='/'>
        <Logo
          title={formEnabled ? 'Página inicial' : 'aguarde...'}
          disabled={!formEnabled}
        >
          MyWallet
        </Logo>
      </Link>
      <Top>{edit ? 'Editar ' : 'Nova '}{entryType == 'in' ? 'entrada ' : 'saída '}</Top>
      <Form onSubmit={handleClick}>
        <Input
          type='number'
          min="0.00"
          step="0.01"
          placeholder='Valor'
          name='value'
          value={entry.value}
          onChange={handleForm}
          disabled={!formEnabled}
          required
        />

        <Input
          type='text'
          placeholder='Descrição'
          name='description'
          value={entry.description}
          onChange={handleForm}
          disabled={!formEnabled}
          required
        />

        <Button
          type='submit'
          title={`${formEnabled ? (edit ? 'Atualizar ' : 'Salvar ') + (entryType == 'in' ? 'entrada ' : 'saída ') : 'aguarde...'}`}
          disabled={!formEnabled}
        >
          {formEnabled ? (edit ? 'Atualizar ' : 'Salvar ') + (entryType == 'in' ? 'entrada ' : 'saída ') : spinner()}
        </Button>
      </Form>
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
	background: linear-gradient(-45deg, #8C11BE, #6F00FF, #8C11BE, #6F00FF);
	background-size: 400% 400%;
  padding: 25px 5%;
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

  &:disabled {
    transform: none;
    cursor: default;
  }
`;

const Top = styled.div`
  width: 100%;
  max-width: 330px;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  margin-bottom: 40px;
  color: #FFFFFF;
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
    color: #909090;
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