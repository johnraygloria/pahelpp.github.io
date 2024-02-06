import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { auth } from './firebase'; // import the firebase config file

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      // create a user with email and password using firebase auth
      const userCredential = await auth.createUserWithEmailAndPassword(data.email, data.password);
      // get the user object from the userCredential
      const user = userCredential.user;
      // update the user's display name with the name from the form data
      await user.updateProfile({
        displayName: data.name
      });
      // set a success message
      setMessage('User registered successfully!');
    } catch (error) {
      // handle any error from firebase auth
      setMessage(error.message);
    }
  };

  return (
    <div className="register-form">
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...register("name", { required: true })} />
          {errors.name && <span className="error">Name is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email", { required: true })} />
          {errors.email && <span className="error">Email is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password", { required: true })} />
          {errors.password && <span className="error">Password is required</span>}
        </div>
        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default RegisterForm;
