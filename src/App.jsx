import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Grid from '@mui/material/Grid'

import WelcomePage from './pages/WelcomePage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Grid container
    justifyContent={'center'}
    direction={'row'}>
         <Router>
        <Switch>
          <Route exact path={"/"}>
            <WelcomePage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </Grid>
  );
}

export default App;
