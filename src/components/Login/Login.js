import './Login.css'
import React, { useState } from 'react'
import google from '../../assests/Google__G__Logo.svg.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleEmail = (e) => {
        const mail = e.target.value;
        setEmail(mail)
    }
    const handlePassword = (e) => {
        const pass = e.target.value;
        setPassword(pass)
    }

    const handleSingIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
            .then(() => {
                navigate(from, { replace: true });
            })

    }

    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form className='form' onSubmit={handleSingIn}>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmail} type="email" name="email" id="email" />
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePassword} type="password" name="password" id="password" />
                </div>
                <input className='login-btn' type="submit" value="Login" />
            </form>
            <p className='account-link'>
                New to Ema-john? <Link className='link' to='/signup'>Create New Account</Link>
            </p>
            <div className='or-line'>
                <div className='left-line'></div>
                <p className='or-text'>or</p>
                <div className='right-line'></div>
            </div>
            <button className='google-login-btn'>
                <img style={{ width: '32px', height: '32px' }} src={google} alt="brand-logo" />
                <p>Continue with Google</p>
            </button>
        </div>
    )
}

export default Login