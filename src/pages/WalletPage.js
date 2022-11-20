import { useState, useContext, useEffect } from 'react';
import { IoLogOutOutline, IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import axios from 'axios';

import { WALLET_URL, ENTRY_URL } from '../constants.js';
import UserContext from '../UserContext.js';
import WalletContext from '../WalletContext.js';
import Records from '../components/Records.js';

export default function WalletPage() {

  const { user } = useContext(UserContext);
  const { setEdit, setEntryType, setEntry } = useContext(WalletContext);
  const [wallet, setWallet] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/');
    } else {
      setLoading(true);
      axios.get(WALLET_URL, config)
        .then(res => {
          setWallet(res.data);
          setLoading(false);
        })
        .catch(err => {
          if (err.response.status === 401) {
            localStorage.removeItem('MyWallet');
            navigate('/');
          }
          setLoading(false);
          setError(true);
          toast.error(err.response.data.message);
        });
    }
  }, [refresh]);

  function handleDelete(id, description) {
    if (window.confirm(`Deseja realmente excluir '${description}'?`)) {
      toast.promise(axios.delete(`${ENTRY_URL}/${id}`, config)
        .then(() => {
          setRefresh(Math.random());
        })
        .catch(err => {
          if (err.response.status === 401) {
            localStorage.removeItem('MyWallet');
            navigate('/');
          }
          toast.error(err.response.data.message)
        }),
        {
          pending: 'Excluindo...',
          success: `'${description}' excluido!`,
          error: `Erro ao excluir '${description}'`
        });
    }
  }

  return (
    <PageContainer>
      <ToastContainer position='top-center' autoClose={2000} theme='colored' />
      <Top>
        <Link to='/'>
          <Logo title='Página inicial'>MyWallet</Logo>
        </Link>
        <div>
          <Name>{`Olá, ${user.name}`}</Name>
          <button
            title='Logout'
            onClick={() => {
              localStorage.removeItem('MyWallet');
              navigate('/');
            }}
          >
            <IoLogOutOutline />
          </button>
        </div>
      </Top>
      <Records
        wallet={wallet}
        error={error}
        loading={loading}
        setRefresh={setRefresh}
        handleDelete={handleDelete}
      />
      <Footer>
        <Button
          title='Nova entrada'
          onClick={() => {
            setEntryType('in');
            setEdit(false);
            setEntry({ value: '', description: '' })
            navigate('/entry');
          }}
        >
          <div>
            <IoAddCircleOutline />
            <span>Nova entrada</span>
          </div>
        </Button>
        <Button
          title='Nova saída'
          onClick={() => {
            setEntryType('out');
            setEdit(false);
            setEntry({ value: '', description: '' })
            navigate('/entry');
          }}
        >
          <div>
            <IoRemoveCircleOutline />
            <span>Nova saída</span>
          </div>
        </Button>
      </Footer>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  width: 100%;
  min-width: 280px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
	background: linear-gradient(-45deg, #8C11BE, #6F00FF, #8C11BE, #6F00FF);
	background-size: 400% 400%;
  padding: 25px;
  box-sizing: border-box;
	animation: gradient 10s ease infinite;
  transition: 2s;

  &:hover {
    cursor: default;
  }

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
`;

const Top = styled.header`
  width: 100%;
  max-width: 330px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 9px;
  box-sizing: border-box;
  
  div {
    display: flex;
    align-items: center;

    svg {
      width: 23px;
      height: 24px;
      color: #FFFFFF;
    }

    button {
      background-color: transparent;
      border: none;
      outline: none;
      transition: 1s;
      
      &:hover {
        transform: scale(1.3);
        cursor: pointer;
      }
    }
  }
`;

const Logo = styled.button`
  font-family: 'Saira Stencil One', sans-serif;
  font-weight: 400;
  font-size: 23px;
  color: #FFFFFF;
  transition: 1s;
  border: none;
  outline: none;
  background-color: transparent;

  &:hover {
    transform: scale(1.05);
  }
`;

const Name = styled.span`
  font-family: 'Raleway';
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  margin: 0px 5px;
  color: #FFFFFF;
  word-break: break-word;
`;

const Footer = styled.footer`
  height: 114px;
  width: 100%;
  max-width: 330px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 48%;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  color: #FFFFFF;
  background-color: rgba(255, 255, 255, .15);
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 8px;
  transition: 1s;

  div {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-between;

    svg {
      width: 22px;
      height: 22px;
      color: #FFFFFF;
    }
  }

  &:hover {
    background-color: rgba(255, 255, 255, .30);
    transform: scale(1.05);
    cursor: pointer;
  }
`;