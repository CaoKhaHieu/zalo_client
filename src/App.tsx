import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OTPPages from './pages/ForgotPassPage';
import ForgotPassPage from './pages/ForgotPassPage';
import NewPassPage from './pages/NewPassPage';

function App() {
  return (
    <Switch>
      <Route path='/login'>
        <LoginPage></LoginPage>
      </Route>

      <Route path='/register'>
        <RegisterPage></RegisterPage>
      </Route>

      <Route path='/forgotpass'>
        <ForgotPassPage></ForgotPassPage>
      </Route>

      <Route path='/newpass'>
        <NewPassPage></NewPassPage>
      </Route>
    </Switch>
  );
}

export default App;
