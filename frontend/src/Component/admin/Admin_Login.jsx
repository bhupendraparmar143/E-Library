import React, { useState } from 'react'
import './admin.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Header } from '../Header';

export const Admin_Login = () => {
    const navigate = useNavigate()
    const [inputVal, setInputVal] = useState({
        "email": "",
        "password": ""
    })
    const inputHandler = (event) => {
        setInputVal({ ...inputVal, [event.target.name]: event.target.value });
    }

    const adminLogin = async (event) => {
        event.preventDefault();
        // console.log(inputVal)
        let res = await axios.post('http://localhost:5000/api/adminlogin', inputVal)
        // console.log(res.data);
        if(res.data.success == true){
           localStorage.setItem('token_data', res.data.token);
            navigate('/adminDashBord');
        }
        else{
            alert(res.data.message);
            navigate("/adminLogin");
        }
        setInputVal({
            "email" : "",
            "password" : ""
        });
    }
    return (<>
            <Header/>
        <div className="container">
            <div className="loginForm">
                <form onSubmit={adminLogin}>
                    <h1 className='text-center mb-3 text-color'>Admin Login Page</h1>
                    <div className="mb-3">
                        <label htmlFor="email1" className="form-label">Email address</label>
                        <input type="email" value={inputVal.email} placeholder='Enter Email' required onChange={inputHandler} className="form-control" name='email' />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" value={inputVal.password} required placeholder='Enter Password' onChange={inputHandler} className="form-control" name='password' />
                    </div>
                    <button type="submit" className="btn btn-primary animation-bottom">Login</button>
                </form>
            </div>
        </div>
    </>
    )
}
