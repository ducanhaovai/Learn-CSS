import React, { useState } from 'react';
import './LoginSignup.css';
import facebook_icon from '../Asset/fb.png';
import google_icon from '../Asset/Logo Google.png';
import x_icon from '../Asset/text.png';

export const LoginSignup = () => {
    const [action, setAction] = useState('Sign up');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [haveAccountText, setHaveAccountText] = useState("Don’t have an account?");

    const toggleAction = () => {
        if (action === 'Sign up') {
            setAction('Sign in');
            setHaveAccountText("Have an account?");
        } else {
            setAction('Sign up');
            setHaveAccountText("Don’t have an account?");
        }
    };

    const handleSignup = () => {
        // Handle signup logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div>
            <div className="container">
                <header className='heading'>
                    <h2>Get’s started.</h2>
                    <span className='heading-content'>{haveAccountText} <span className='sign-up' onClick={toggleAction}>{action}</span></span>
                </header>
                <div className="social">
                    <button className='fb'>
                        <img src={facebook_icon} alt="Facebook"/>
                    </button>
                    <button className='google'>
                        <img src={google_icon} alt="Google"/>
                    </button>
                    <button className='X'>
                        <img src={x_icon} alt="Close"/>
                    </button>
                </div>
                <div className="middle">
                    <div className="rectangle"></div>
                    <span>or login with email</span>
                    <div className="rectangle"></div>
                </div>
                <div className="content">
                    {action === 'Sign in' && (
                        <div className="input">
                            <span className='text'>Name</span>
                            <input className='text-input' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} autoFocus required />
                        </div>
                    )}
                    <div className="input">
                        <span className='text'>Email</span>
                        <input className='text-input' type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} autoFocus  required />
                    </div>
                    <div className="input">
                        <span className='text'>Password</span>
                        <input className='text-input' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="check-box">
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </div>
                </div>
                <div className="summit-container">
                    <button className='sign-in' onClick={handleSignup}>{action}</button>
                </div>
            </div>
        </div>
    );
};
