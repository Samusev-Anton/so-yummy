import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
// import { store, persistor } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/so-yummy">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
