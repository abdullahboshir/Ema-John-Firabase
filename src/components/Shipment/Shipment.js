import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Shipment = () => {

    const [user] = useAuthState(auth)
    const [name, setName] = useState();
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const [
        signInWithEmailAndPassword,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate()
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";

    const handleNameBlur = event => {
        setName(event.target.value);
    };

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    };

    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    };

    if(user){
        navigate(from, {replace: true});
    }


    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, address);
    }

   
    return (
        <div className='form-container'>
               <div>
            <form onSubmit={handleUserSignIn}>
             
                    <h2 className='form-title'>Shipping Information</h2>
                    <div className="input-group">

                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="Name" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input value={user?.email} readOnly type="text" name='Email' id='' required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Your Address</label>
                        <input onBlur={handleAddressBlur} type="text" name='Address' id='' required></input>
                    </div>

                    <div className="input-group">
                        <label htmlFor="phone">Your Phone</label>
                        <input onBlur={handlePhoneBlur} type="text" name='Phone' id='' required></input>
                    </div>
                    <p style={{color: "red"}}>{error?.message}</p>
                  
                        {
                            loading && <p>Loading...</p>
                        }
                   
                    <input className='form-submit' type="submit" value="Add Shipping" />
                
            </form>
        
            </div>
           
    
 </div>
    );
};

export default Shipment;