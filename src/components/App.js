import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Login from 'pages/Login';

import GlobalStyles from './common/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import LightTheme from 'themes/lightTheme';
import DarkTheme from 'themes/darkTheme';

function App() {
  const [theme, setTheme] = useState(LightTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((s) => (s.id === 'light' ? DarkTheme : LightTheme));
        }
      }}
    >
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
