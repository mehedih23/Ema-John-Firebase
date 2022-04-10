import './Shipment.css'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')


    const email = user?.email;

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleAddress = (e) => {
        setAddress(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleShipment = e => {
        e.preventDefault();
        const buyerInfo = { name, email, address, phone }
        console.log(buyerInfo);
    }

    return (
        <div className='form-box'>
            <h1 className='form-title'>Sign Up</h1>
            <form onSubmit={handleShipment} className='form'>
                <div className='input-group'>
                    <label htmlFor="name">Your Name</label>
                    <input onBlur={handleName} type="text" name="name" id="name" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input value={user?.email} readOnly type="email" name="email" id="email" />
                </div>
                <div className='input-group'>
                    <label htmlFor="address">Address</label>
                    <input onBlur={handleAddress} type="text" name="address" id="address" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="Phone-Number">Phone Number</label>
                    <input onBlur={handlePhone} type="text" name="Phone-Number" id="Phone-Number" required />
                </div>
                <input className='login-btn' type="submit" value="Proceed Checkout" />
            </form>
        </div>
    )
}

export default Shipment