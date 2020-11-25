import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import { FilterProvider } from './hooks/filter';

import theme from './styles/theme';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FilterProvider>
          <Routes />
        </FilterProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
