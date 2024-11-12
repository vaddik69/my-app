import '../assets/css/SignInForm.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Error } from '../../entity/errors'
import { useEffect } from 'react'

const SignInForm = ({ linkPath, userRole, onUserSigningIn, errorKey }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(Error.getError());

    useEffect(() => {
        setError(errorKey)
    }, [errorKey])

    const handleSignInSubmit = (e) => {
        e.preventDefault();

        const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            setError(Error.getError(Error.errorKeys.EMPTY_EMAIL));
            return;
        }
        if (!password) {
            setError(Error.getError(Error.errorKeys.EMPTY_PASSWORD));
            return;
        }
        if (!EMAIL_REGEXP.test(email)) {
            setError(Error.getError(Error.errorKeys.INCORRECT_EMAIL));
            return;
        }

        onUserSigningIn(email, password);
    }

    return (
        <div className='back-div'>
            <div className="wrapper">
                <form onSubmit={handleSignInSubmit}>
                    <h1>Sign In</h1>

                    <p className='error-msg' style={{color: error.color}}>{error.text}</p>

                    <div className='input-box'>
                        <input
                            type='text'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='input-box'>
                    <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type='submit' className='signin-button' disabled={!email || !password}>
                        Sign In
                    </button>

                    <div className='box-link'>
                        <Link className='signin-link' to={linkPath}>Sign In as a {userRole}</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignInForm