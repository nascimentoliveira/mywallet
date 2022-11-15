import styled from 'styled-components';
import { IoLogOutOutline, IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

export default function WalletPage() {

  return (
    <PageContainer>
      <Top>
        <Logo title='Página inicial'>MyWallet</Logo>
        <div>
          <Name>Olá, Fulano</Name>
          <button title='Logout'><IoLogOutOutline /></button>
        </div>
      </Top>
      <Book>Não há registros de entrada ou saída</Book>
      <Footer>
        <Button title='Nova entrada'>
          <div>
            <IoAddCircleOutline />
            <span>Nova entrada</span>
          </div>
        </Button>
        <Button title='Nova saída'>
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
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
	background: linear-gradient(-45deg, #8C11BE, #6F00FF, #8C11BE, #6F00FF);
	background-size: 400% 400%;
  padding: 25px 5%;
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
  font-size: 26px;
  line-height: 31px;
  margin: 0px 5px;
  color: #FFFFFF;
`;

const Book = styled.section`
  height: 100%;
  width: 100%;
  max-width: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #868686;
  margin: 13px 0px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, .90);
  border-radius: 5px;
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

