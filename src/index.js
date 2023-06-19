import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Container } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';

const theme = createTheme({
  palette: {
    primary: {
      main: '#c9def0',
      dark: '#829baf',
      contrastText: '#000',
    },
    secondary: {
      main: '#00838f',
      light: '#5edfeb',
      contrastText: '#000',
    },
    appbar: {
      main: '#00838f',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Phonebook-in-React">
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Container
              maxWidth="false"
              disableGutters={true}
              sx={{ bgcolor: 'primary.main' }}
            >
              <Box
                sx={{
                  bgcolor: '#primary.main',
                  height: '100vh',
                  textAlign: 'center',
                }}
              >
                <App />
              </Box>
            </Container>
          </ThemeProvider>
        </Provider>
      </PersistGate>
    </BrowserRouter>
  </React.StrictMode>
);
