import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Grid from '@mui/material/Grid'

import WelcomePage from './pages/WelcomePage';
import NotFoundPage from './pages/NotFoundPage';
import EmpresaPage from './pages/EmpresaPage';
import NoticiasPage from './pages/NoticiasPage';
import ContactenosPage from './pages/ContactenosPage';
import RegisterPage from './pages/RegistroUsuarios/RegisterPage';


const App = () => {
  return (

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
        <Route path={"/Registro"}>
          <RegisterPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
