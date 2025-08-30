import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Header } from '../Header';

export const Author_Login = () => {
    const navigate = useNavigate();
    const [inputVal, setInputVal] = useState({
        "author_email": "",
        "author_password": ""
    })
    const inputHandler = (event) => {
        setInputVal({ ...inputVal, [event.target.name]: event.target.value });
    }

    const autherLogin = async (event) => {
        event.preventDefault();
        // console.log(inputVal)
        let res = await axios.post(`http://localhost:5000/api/authorLogin`, inputVal);
        // console.log(res.data)
        if (res.data.success == true) {
            navigate('/authorDashbord')
        }
        else {
            navigate('/authorLogin')
        }
        alert(`${res.data.message}`)
        setInputVal({
            "author_email": "",
            "author_password": ""
        })
    }
    return (<>
        <Header />
        <div className="container">
            <div className="loginForm">
                <form onSubmit={autherLogin}>
                    <h1 className='text-center mb-3 text-color'>Author Login Page</h1>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" value={inputVal.author_email} placeholder='Enter Email' required onChange={inputHandler} className="form-control" name='author_email' />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" value={inputVal.author_password} placeholder='Enter Password' required onChange={inputHandler} className="form-control" name='author_password' />
                    </div>
                    <button type="submit" className="btn btn-primary animation-bottom">Login</button>
                </form>
            </div>
        </div>
    </>

    )
}
