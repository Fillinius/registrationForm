import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Navbar from './components/navBar'
import Main from './components/main'
import LoginForm from './components/loginForm'
import RegistrationForm from './components/registrationForm'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signin" component={LoginForm} />
        <Route path="/signout" component={RegistrationForm} />
      </Switch>
    </div>
  )
}

export default App
