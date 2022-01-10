import { createGlobalStyle } from 'styled-components';
import SegoeUIBoldWoff from './SegoeUI-Bold.woff';
import SegoeUIBoldWoff2 from './SegoeUI-Bold.woff2';
import SegoeUILightWoff from './SegoeUI-Light.woff';
import SegoeUILightWoff2 from './SegoeUI-Light.woff2';
import SegoeUISemiBoldWoff from './SegoeUI-SemiBold.woff';
import SegoeUISemiBoldWoff2 from './SegoeUI-SemiBold.woff2';
import SegoeUIWoff from './SegoeUI.woff';
import SegoeUIWoff2 from './SegoeUI.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Segoe UI';
    src: url(${SegoeUIWoff}) format('woff'),
         url(${SegoeUIWoff2}) format('woff2');
  }
  @font-face {
    font-family: 'Segoe UI Bold';
    src: url(${SegoeUIBoldWoff}) format('woff'),
         url(${SegoeUIBoldWoff2}) format('woff2');
  }
  @font-face {
    font-family: 'Segoe UI Semi Bold';
    src: url(${SegoeUISemiBoldWoff}) format('woff'),
         url(${SegoeUISemiBoldWoff2}) format('woff2');
  }
  @font-face {
    font-family: 'Segoe UI Light';
    src: url(${SegoeUILightWoff}) format('woff'),
         url(${SegoeUILightWoff2}) format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    width: 100vw;
    height: 100vh;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: transparent;
  }

  input {
    border: none;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 767px) {
    :root {
      font-size: 12px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    :root {
      font-size: 14px;
    }
  }
`;
