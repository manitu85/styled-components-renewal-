import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    background: ${({ theme }) => theme.bodyBackgroundColor};;
    color: ${({ theme }) => theme.bodyFontColor};
    min-height: 100vh;
    margin: 0;
    font-family: 'Kaushan Script', cursive;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyles;
