import { useState, useContext, useEffect } from 'react';
import { Rings } from 'react-loader-spinner';
import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import WalletContext from '../WalletContext'

export default function Records({ entriesList, error, loading }) {

  const { setEdit, setEntryType } = useContext(WalletContext);
  const navigate = useNavigate();

  function handleDelete(e, id) {
    e.preventDefault();
    alert("clicou no ", id);

  }

  if (entriesList.length === 0) {
    if (loading) {
      return (
        <RecordsComponent noList={true}>
          Um momento...
          <Rings
            height='100'
            width='100'
            color='#7202F7'
            radius='10'
          />
        </RecordsComponent>
      );
    } else if (error) {
      return (
        <RecordsComponent noList={true}>
          Um erro ocorreu!
          Não foi possível carregar os dados da sua carteira!
          Verifique a sua conexão e tente novamente!
        </RecordsComponent>
      );
    } else {
      return (
        <RecordsComponent noList={true}>
          Não há registros de entrada ou saída!
        </RecordsComponent>
      );
    }
  }

  return (
    <RecordsComponent noList={false}>
      <div>
        {entriesList.map(entry =>
          <Entry
            key={entry.id}
            onClick={() => {
              setEntryType(entry.type);
              setEdit(true);
              navigate('/entry');
            }}
          >
            <Date>{entry.date}</Date>
            <div>
              <Description>{entry.description}</Description>
              <Value type={entry.type}>{entry.value}</Value>
            </div>
            <button
              title='excluir'
              onClick={(e) => handleDelete(e, entry.id)}
            >
              <IoClose />
            </button>
          </Entry>
        )}
      </div>
      <div>
        <Saldo>
          <span>SALDO</span>
          <Total positive={true}>{2849.96}</Total>
        </Saldo>
      </div>
    </RecordsComponent>
  );
}


const RecordsComponent = styled.section`
  height: 100%;
  width: 100%;
  max-width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.noList ? 'center' : 'space-between'};
  align-items: center;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #868686;
  margin: 13px 0px;
  padding: 23px 12px 10px 12px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, .90);
  border-radius: 5px;

  div {
    width: 100%;
    height: 25px;
  }
`;

const Entry = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  background-color: transparent;
  margin: 8px 0px;
  border: none;
  outline: none;
  cursor: pointer;

  div {
    width: 100%;
    display: flex;
    padding: 0px 7px;
    justify-content: space-between;
    align-items: center;
  }

  button {
    width: 18px;
    height: 18px;
    border: none;
    outline: none;
    background-color: transparent;
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg {
      color: #C6C6C6;
    }
  }
`;

const Date = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #C6C6C6;
`;

const Description = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const Value = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: ${props => props.type == 'in' ? '#03AC00' : '#C70000'};
`;

const Saldo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 3px;

  span {
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
  }
`;

const Total = styled.h1`
  font-weight: 400;
  color: ${props => props.positive ? '#03AC00' : '#C70000'};
`;