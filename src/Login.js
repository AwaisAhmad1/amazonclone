import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';

import { auth } from './firebase';
import userEvent from '@testing-library/user-event';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //some firebase code
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            // it create successfully an email and password

            history.push('/')
        }
        ).catch(error => alert(error.message))

    }
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            // it create successfully an email and password
            console.log(auth);
            if (auth) {
                history.push('/')
            }
        })

            .catch(error => alert(error.message))
        //firebase code of register
    }
    return (
        <div className="login">
            <Link to='/'>
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__container">
                <h1> Sign In</h1>
                <form>
                    <h5> E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5> Enter Your password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" onClick={signIn} className="login__singInButton"> Sign In</button>

                </form>
                <p> By Signing-in you agree to Amazon's Conditions of Use & Sale. Pelase see our Privacy Notice, our Cookies Notice and our Interest-Based Ads</p>
                <button onClick={register} className="login__registrerButton"> Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
