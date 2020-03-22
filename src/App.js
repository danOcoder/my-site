import React from 'react';

import { ThemeProvider } from 'react-jss';

import Header from './components/Header/index';

import './styles/normalize.css';
import './styles/App.css';
import theme from './styles/theme';

function App() {
  console.log('Hi 👋');
  return (
    <div className='container'>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
