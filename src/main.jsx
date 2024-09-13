import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from './Redux/store.js';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
// import { ThemeProvider } from 'styled-components';
import i18n from './i18n.js';
import { I18nextProvider } from 'react-i18next';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        {/* <ThemeProvider theme={Theme}> */}
        <App />
        {/* </ThemeProvider> */}
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
