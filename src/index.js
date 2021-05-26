import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import Globalstyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import media from './styles/media';

ReactDOM.render(
  <>
    <ThemeProvider theme={{ ...theme, ...media }}>
      <Globalstyle />
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
