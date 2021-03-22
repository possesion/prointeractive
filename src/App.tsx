import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import Header from './pages/Header';
import theme from './theme';
import Features from './pages/Features';
import Coffee from './pages/Cofee';
import GiftSet from './pages/GiftSet';

const App = () => {
  // const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Features />
        <Coffee />
        <GiftSet />
      </div>
    </ThemeProvider>
  );
};

export default App;
