import GlobalStyle from './assets/styles/GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import UserContext from './UserContext.js';
import WalletContext from './WalletContext.js';
import SignInPage from './pages/SignInPage.js';
import SignUpPage from './pages/SignUpPage.js';
import WalletPage from './pages/WalletPage.js';
import EntryPage from './pages/EntryPage.js';

export default function App() {

  const [user, setUser] = useState('');
  const [edit, setEdit] = useState(false);
  const [entryType, setEntryType] = useState('');
  const [entry, setEntry] = useState('');

  return (
    <UserContext.Provider
      value={{ user, setUser }}
    >
      <WalletContext.Provider
        value={{ edit, setEdit, entryType, setEntryType, entry, setEntry }}
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