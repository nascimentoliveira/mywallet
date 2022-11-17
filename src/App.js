import GlobalStyle from './assets/styles/GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './UserContext';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import WalletPage from './pages/WalletPage';
import AddEntryPage from './pages/AddEntryPage';

export default function App() {

  const [user, setUser] = useState('');

  return (
    <UserContext.Provider
      value={{ user, setUser}}
    >
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<SignInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/wallet' element={<WalletPage />} />
          <Route path='/addentry' element={<AddEntryPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}