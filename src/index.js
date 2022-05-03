import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './Components/App';
import { GlobalStyle } from './GlobalStyle.styled';
import '../node_modules/modern-normalize/modern-normalize.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constants/theme';

// это мы инициализируем редакс.
import { store } from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
