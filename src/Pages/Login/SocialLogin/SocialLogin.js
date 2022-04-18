import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    let loadingElement;
    if (error || error1) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}{error1?.message}</p>
        </div>
    }
    if (loading || loading1) {
        loadingElement = <div>
            <p className='text-danger'>Loading...</p>
        </div>
    }
    if (user || user1) {
        navigate('/');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
            </div>
            {errorElement}
            {loadingElement}
            <div>
                <button onClick={() => signInWithGoogle()}
                    className='btn-primary w-50 d-block mx-auto my-2 rounded'>
                    Google SignIn
                </button>
                <button

                    className='btn-info w-50 d-block mx-auto my-2 rounded'>
                    Facebook SignIn
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn-danger w-50 d-block mx-auto my-2 rounded'>
                    GitHub SignIn
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;