import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate()
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    };

    if(user){
        navigate(from, {replace: true})
    }


    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

   
    return (
        <div className='form-container'>
               <div>
            <form onSubmit={handleUserSignIn}>
             
                    <h2 className='form-title'>Login</h2>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' id='' required></input>
                    </div>
                    <p style={{color: "red"}}>{error?.message}</p>
                  
                        {
                            loading && <p>Loading...</p>
                        }
                   
                    <input className='form-submit' type="submit" value="Login" />
                
            </form>
            <p>
                New to Ema-John? <Link className='form-link' to= "/signup">Create an account</Link>
            </p>
            <div className='line'><p>or</p></div>
          <Link to= "/">  <div className="input-group">
            <div className='google'><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" /> <p>Continue with Google</p></div>
            </div></Link>
            </div>
           
        </div>
    );
};

export default Login;