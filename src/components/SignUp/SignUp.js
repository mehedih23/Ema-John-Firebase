import './SignUp.css'
import React, { useState } from 'react'
import google from '../../assests/Google__G__Logo.svg.png'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate();



    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleEmail = (e) => {
        const mail = e.target.value;
        setEmail(mail)
    }
    const handlePassword = (e) => {
        const pass = e.target.value;
        setPassword(pass)
    }
    const handleConfirmPass = (e) => {
        const confirmPass = e.target.value;
        setConfirmPassword(confirmPass)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Password Mismatched')
        }
        else {
            setError('')
            createUserWithEmailAndPassword(email, password)
                .then(() => {
                    navigate('/login')
                })
        }
    }


    return (
        <div className='form-box'>
            <h1 className='form-title'>Sign Up</h1>
            <form onSubmit={handleFormSubmit} className='form'>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmail} type="email" name="email" id="email" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePassword} type="password" name="password" id="password" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleConfirmPass} type="password" name="confirm-password" id="confirm-password" required />
                </div>
                <p style={{ color: 'red', margin: '0px' }}>{error}</p>
                <input className='login-btn' type="submit" value="Sign Up" />
            </form>
            <p className='account-link'>
                Already Have an account? <Link className='link' to='/login'>Login</Link>
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

export default SignUp