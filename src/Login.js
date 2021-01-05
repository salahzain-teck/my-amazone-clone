import React from 'react';
import './Login.css';
import  { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';



function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                 history.push('/')
            })
            .catch(error => alert(error.message))

  
    }

    const register = e =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
     
            
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))

        
    }

    return (
        <div className="login">
            <Link to="/">
                <img  
                    className="login__logo" 
                    src="data:image/png;base64,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" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange= {e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='text' value={password} onChange= {e => setPassword(e.target.value)} />

                </form>

                <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button> 

                <p>By signing_in you agree to the AMAZONE FAKE CLONE Conditions of use &Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className="login__registerButton" onClick={register}>Create your Amazone Account</button>
            </div>
        </div>
    )
}

export default Login
