import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '@styles/global';
import { Home } from '@pages/index';

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
