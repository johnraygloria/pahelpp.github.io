import React from 'react';
import './App.css';
import LoginForm from './Components/Auth/LoginForm/LoginForm.jsx'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './Components/Navbar/navbar.css'
import About from './Components/About.jsx';
import ContactUs from './Components/ContactUs.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import RegistrationForm from './Components/Auth/RegistrationForm/RegistrationForm.jsx';
import AuthDetails from './Components/Auth/AuthDetails.jsx';

//Call-outs of link using Router of "react-router-dom" are stated here.

const App = () => {
  return(
    
  <>
  <Router>
      <Navbar/>

      <Switch>
      <Route path='/' compontent={LoginForm} exact>
        <LoginForm/>
      </Route>
      
      <Route path='/Login' compontent={LoginForm} exact>
        <LoginForm/>
      </Route>

      <Route path='/About' compontent={About} exact>
        <About />
      </Route>
      
      <Route path='/Contact_Us' compontent={ContactUs} exact>
        <ContactUs/>
      </Route>

      <Route path='/Register' compontent={RegistrationForm} exact>
        <RegistrationForm/>
      </Route>

      <AuthDetails />
      
    </Switch>
    </Router>
    
</>
)
}
export default App