import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Registar = () => {
    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password)
    }
    return (
        <div>
            <h2 className='text-center text-primary'>Please Registar</h2>
            <form onSubmit={handleRegister} className='register-form'>
                <input type="text" name="name" id="" required placeholder='Your Name' />
                <input type="email" name="email" id="" required placeholder='Your Email' />
                <input type="password" name="password" id="" required placeholder='Your Password' />
                <input className='btn-primary' type="submit" value="Register" />
            </form>
            <p className='text-center'>Already have an account? <Link className='text-danger text-decoration-none' to={'/login'} > Please Login!</Link></p>
        </div>
    );
};

export default Registar;