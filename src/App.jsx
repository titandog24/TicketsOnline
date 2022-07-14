import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Grid from '@mui/material/Grid'

import WelcomePage from './pages/WelcomePage';
import NotFoundPage from './pages/NotFoundPage';
import EmpresaPage from './pages/EmpresaPage';
import NoticiasPage from './pages/NoticiasPage';
import ContactenosPage from './pages/ContactenosPage';


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
          <Route path={"/Noticias"}>
            <NoticiasPage />
          </Route>
          <Route path={"/Contactenos"}>
            <ContactenosPage />
          </Route>
          <Route path={"/Empresa"}>
            <EmpresaPage />
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
