import GlobalStyle from './assets/styles/GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import WalletPage from './pages/WalletPage';
import AddEntryPage from './pages/AddEntryPage';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/wallet' element={<WalletPage />} />
        <Route path='/addentry' element={<AddEntryPage />} />
      </Routes>
    </BrowserRouter>
  );
}