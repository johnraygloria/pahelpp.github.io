import '../RegistrationForm/RegistrationFormStyle.css';
import { FaUser, FaLock } from "react-icons/fa";
import React, {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Config/firebase";


const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const RegForm = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword( auth, email, password )    
      
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
        <h1>Let's get started.</h1>
        
        <h5> Create your account now and access the latest and most effective family planning solutions within reach.</h5>
        
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
          <p>Already have an account? <a href='/Login'> Login </a> </p>
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



export default RegistrationForm;