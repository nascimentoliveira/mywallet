import styled from 'styled-components';

export default function SignInPage() {

  return (
    <PageContainer>
      <Logo>MyWallet</Logo>
      <Form>
        <Input
          type='text'
          placeholder='Nome'
          name='name'
          required
        />

        <Input
          type='email'
          placeholder='E-mail'
          name='email'
          required
        />

        <Input
          type='password'
          placeholder='Senha'
          name='password'
          required
        />

        <Input
          type='password'
          placeholder='Confirme a senha'
          name='password'
          required
        />

        <Button type='submit'>
          Cadastrar
        </Button>
      </Form>

      <ButtonSwap>
        Já tem uma conta? Entre agora!
      </ButtonSwap>
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
`;

const Logo = styled.span`
  font-family: 'Saira Stencil One', sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  margin: 24px 0px;
  color: #FFFFFF;
  transition: 1s;

  &:hover {
    transform: scale(1.2);
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
  margin: 3px;
  border: none;
  outline: none;
  transition: 1s;

  &:hover {
    background-color: rgba(255, 255, 255, .30);
    transform: scale(1.03);
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
}
`;