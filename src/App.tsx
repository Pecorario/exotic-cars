import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '@styles/global';
import { Home } from '@pages/index';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
