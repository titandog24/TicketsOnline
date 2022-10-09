import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import WelcomePage from './pages/WelcomePage';
import NotFoundPage from './pages/NotFoundPage';
import EmpresaPage from './pages/EmpresaPage';
import NoticiasPage from './pages/NoticiasPage';
import ContactenosPage from './pages/ContactenosPage';
import RegisterPage from './pages/RegistroUsuarios/RegisterPage';
import Login from './pages/Login';
import ComprasPage from './pages/ComprasPage';


const App = () => {

  const [userLogin, setUserLogin] = useState(false)

  const logout = (value) => {
    if(!value)
      localStorage.clear();
    setUserLogin(value)

  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(!userLogin)
        axios.post('http://localhost:8090/api/user/validateToken',{token})
        .then((res) => {
          if(res.data.data === 'true')
            setUserLogin(true)
        })
        .catch((err) => {
          console.log(err);
        })

  }, [userLogin, setUserLogin])

  return (

    <Router>
      <Switch>
        <Route exact path={"/"}>
          <WelcomePage User={userLogin} UserLogin={logout}/>
        </Route>
        <Route path={"/Noticias"}>
          <NoticiasPage User={userLogin} UserLogin={logout}/>
        </Route>
        <Route path={"/Contactenos"}>
          <ContactenosPage User={userLogin} UserLogin={logout}/>
        </Route>
        <Route path={"/Empresa"}>
          <EmpresaPage User={userLogin} UserLogin={logout}/>
        </Route>
        <Route path={"/Registro"}>
          <RegisterPage User={userLogin} UserLogin={setUserLogin}/>
        </Route>
        <Route path={"/Login"}>
          <Login User={userLogin} UserLogin={setUserLogin} />
        </Route>
        <Route path={"/Comprar"}>
          <ComprasPage User={userLogin} UserLogin={logout}/>
        </Route>
        <Route>
          <NotFoundPage User={userLogin} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
