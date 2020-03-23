import React, { useState, useEffect } from 'react';

import { ThemeProvider } from 'react-jss';

import Header from './components/Header/index';

import './styles/normalize.css';
import './styles/App.css';
import theme from './styles/theme';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  console.log(loading);

  return (
    <div
      style={{ opacity: loading ? 0 : 1, transition: 'opacity, 1s ease-in' }}
      className='container'
    >
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  );
};

export default App;
