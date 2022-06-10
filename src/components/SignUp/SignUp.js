import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './signUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [email, setEmail,] = useState("");
    const [password, setPassword] = useState("");
    const [ confirmPassword, setconfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    };

    const handelConfirmPasswordBlur = event => {
        setconfirmPassword(event.target.value);
    };

    if(user){
        navigate("/")
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Your two password didn't match")
            return;
        }
        if(password.length < 6){
            setError("Password must be 6 characters or longer");
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div>
             <div className='form-container'>
               <div>
            <form onSubmit={handleCreateUser}>
             
                    <h2 className='form-title'>Sign Up</h2>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' id='' required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handelConfirmPasswordBlur} type="password" name='password' id='' required></input>
                        <p style={{color: "red"}}>{error}</p>
                    </div>
                    <input className='form-submit' type="submit" value="Sign Up" />
                
            </form>
            <p>
            Already have an account?? <Link className='form-link' to= "/login">Login</Link>
            </p>
            <div className='line'><p>or</p></div>
            <Link to= "/">  <div className="input-group">
            <div className='google'><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" /> <p>Continue with Google</p></div>
            </div></Link>
            </div>
        </div>
        </div>
    );
};

export default SignUp;