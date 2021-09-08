import React, { useState } from 'react';
import Cookies from 'universal-cookie';

import SignInImage from '../assets/signup.jpg';

const initialState = {
    fullName : '',
    userName : '',
    password: '',
    confirm_pass : '',
    phoneNumber : '',
    avatar:'',
}



const Auth = () => {
    const [form,setForm] = useState(initialState);
    const [isSignUp, setIsSignUp] = useState(true);
    const handleChange = (e) => { 
        setForm ({...form,[e.target.name] : e.target.value})
        // console.log(form)
    }
    const switchMode = () => {
        setIsSignUp((prev)=>!prev);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
    }
    return (
        <div className='auth__form-container'>
            <div className='auth__form-container_fields'>
                <div className='auth__form-container_fields-content'>
                    <p>
                        {isSignUp ? 'Sign Up Korun Nondini' : 'Sign In Korun Nondini'}
                    </p>
                    <form onSubmit={handleSubmit}>
                        {
                            isSignUp && (
                                <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input
                                        name="fullName"
                                        type="text"
                                        placeholder="Full Name"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            )
                        }
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="userName">User Name</label>
                            <input
                                name="userName"
                                type="text"
                                placeholder="User Name"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {
                            isSignUp && (
                                <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="phoneNumber">Phone Number </label>
                                    <input
                                        name="phoneNumber"
                                        type="text"
                                        placeholder="Phone Number"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            )
                        }
                        {
                            isSignUp && (
                                <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="avatar">Avatar Url</label>
                                    <input
                                        name="avatar"
                                        type="text"
                                        placeholder="Avatar Url"
                                        onChange={handleChange}

                                    />
                                </div>
                            )
                        }
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {
                            isSignUp && (
                                <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="confirm_pass">Confirm Password</label>
                                    <input
                                        name="confirm_pass"
                                        type="Password"
                                        placeholder="Confirm Your Password"
                                        onChange={handleChange}

                                    />
                                </div>
                            )
                        }

                        <div className="auth__form-container_fields-account">
                            <p>
                                {isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}
                            </p>
                            <span onClick={switchMode}>
                                {
                                    isSignUp? 'Sign In' : 'Sign Up'
                                }
                            </span>
                        </div>
                        <div className='auth__form-container_fields-content_button'>
                            <button>{isSignUp?'Sign Up':'Sign In'}</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='auth__form-container_image'>
                <img src={SignInImage} alt="sign in" />
            </div>
           
        </div>
    );
};

export default Auth;