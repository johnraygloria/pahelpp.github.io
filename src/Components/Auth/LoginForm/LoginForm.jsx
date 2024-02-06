import "../LoginForm/LoginFormStyle.css";
import { FaUser, FaLock } from "react-icons/fa";
import React, {useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Config/firebase";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const LogForm = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)    
      
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <>
    <div className='welcome-message'>
      <h1>PlanIt
        <h1 className='logo-color'>FamIt</h1>
      </h1>
        <p>Approachable modern family planning methods for partners <br/> and families here in the Philippines.
          </p>
    </div>
    <div className= 'wrapper'>
      <form>
        <h1>Welcome Back!</h1>
        
        <h5> Let's start exploring the beneficial ways of
          modern family planning here at PlanItFamIt!
        </h5>
        
        <div className="input-box" >
          <input type="email" placeholder='Enter your email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}  />
          <FaUser className='icon' /> 
        </div>
        
        <div className="input-box password">
          <input type="password" placeholder='Enter your password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} />
          <FaLock className='icon'/>
        </div>

        <div className="remember-forgot">
          <label><input type='checkbox' /> Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit">Log In</button>

        <div className="register-link">
          <p>Don't have an account? <a href='/Register'> Register </a> </p>
        </div>

        <div className= "version">
          <p> PlanItFamIt v1.0.1 </p>
        </div>

        <div className= "reserved">
          <p> All rights reserved 2024.</p>
        </div>
      
      </form>
    </div>
    </>
  );
};


export default LoginForm;