import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  :root{
    font-size:13px;
    ${({ theme }) => theme.desktop`
      font-size:16px;
    `};
  }

  html{
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font: inherit;
  }

  body{
    @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
      font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    background-color: white;
  }

  ul,
  ol {
    list-style: none;
  }

  a,
  a:visited {
    text-decoration: none;
  }

  *:focus {
    outline: none;
  }

  button {
    border: none;
    outline: none;
    text-shadow: none;
    background: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
