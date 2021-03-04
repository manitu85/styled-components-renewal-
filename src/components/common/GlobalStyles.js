import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    box-sizing: border-box;
    background: ${({ theme }) => theme.bodyBackgroundColor};;
    color: ${({ theme }) => theme.bodyFontColor};
    min-height: 100vh;
    margin: 0;
    font-family: 'Kaushan Script', cursive;

    margin: 0;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyles;
