import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Register.css'
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Registar = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { useSendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    const navigate = useNavigate();
    let errorElement;
    let loadingElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }
    if (loading) {
        loadingElement = <div>
            <p className='text-danger'>Loading...</p>
        </div>
    }

    if (user) {
        console.log(user);
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/');



    }
    return (
        <div>
            <h2 className='text-center text-primary'>Please Registar</h2>
            <form onSubmit={handleRegister} className='register-form'>
                <input type="text" name="name" id="" required placeholder='Your Name' />
                <input type="email" name="email" id="" required placeholder='Your Email' />
                <input type="password" name="password" id="" required placeholder='Your Password' />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" required />
                <label className={agree ? 'text-primary ps-2' : 'text-danger ps-2'} htmlFor="terms">Accept Terms and Condition</label>
                <input style={agree ? { opacity: "1" } : { opacity: ".7" }} className='btn-primary' type="submit" value="Register" disabled={!agree} />
            </form>
            <p className='text-center'>Already have an account? <Link className='text-danger text-decoration-none' to={'/login'} > Please Login!</Link></p>
            {errorElement}
            {loadingElement}
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Registar;