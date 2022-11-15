import GlobalStyle from './assets/styles/GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
       {/*  <Route path='/' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/wallet' element={<WalletPage />} />
        <Route path='/inflow' element={<InflowPage />} />
        <Route path='/outflow' element={<OutflowPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}