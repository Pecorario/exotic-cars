import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './global/styles/global';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
