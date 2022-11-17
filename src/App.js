import GlobalStyle from './assets/styles/GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './UserContext';
import WalletContext from './WalletContext';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import WalletPage from './pages/WalletPage';
import EntryPage from './pages/EntryPage';

export default function App() {

  const [user, setUser] = useState('');
  const [edit, setEdit] = useState(false);
  const [entryType, setEntryType] = useState('');

  return (
    <UserContext.Provider
      value={{ user, setUser }}
    >
      <WalletContext.Provider
        value={{ edit, setEdit, entryType, setEntryType }}
      >
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path='/' element={<SignInPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/wallet' element={<WalletPage />} />
            <Route path='/entry' element={<EntryPage />} />
          </Routes>
        </BrowserRouter>
      </WalletContext.Provider>
    </UserContext.Provider>
  );
}