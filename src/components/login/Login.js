import React, { useEffect, useState } from 'react'
import { fetchUser } from '../api/API'
import { loginUser } from '../../app/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './login.css'


function Login() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const isLoggedIn = useSelector(state => state.cart.user)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await fetchUser(username, password);

            if (userData) {
                dispatch(loginUser(userData));
                console.log('User logged in', userData);
                navigate('/cart');
            }
        } catch (error) {
            console.error('Error logging in:', error);

            if (error.message === 'Invalid credentials') {
                alert('Invalid username or password. Please try again.');
            } else {
                alert('Error logging in. Please try again.');
            }
        }
    };

    useEffect(() => {

    }, [isLoggedIn, navigate]);


    return (
        <>
        
    
            <div className="Login">
                <div className="container">
                    <div className="loginCover">
                        
                        <div className="loginForm">
                        <div className="header">
                            <span>Login</span>
                        </div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <label htmlFor="username" >
                                        <span>Username *</span>
                                    </label>
                                    <br/>
                                    <input type="text" 
                                    name="username" 
                                    value={username}
                                    onChange={(e)=>setUsername(e.target.value)} 
                                    placeholder=''
                                    required />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="password">
                                        <span>Password *</span>
                                    </label>
                                    <br/>
                                    <input type="text" 
                                    name="username" 
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)} placeholder=''
                                    required />
                                </div>
                                <div className="loginBtn">
                                <button type='submit'>Log in</button>
                                </div>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         
        </>

    )
}

export default Login