import axios from 'axios';
import React, { useState } from 'react'
import { Header } from '../Header';

export const Author_signUp = () => {
    const [inputVal, setInputVal] = useState({
        "author_name": "",
        "author_email": "",
        "author_password": "",
        "author_image": ""
    })
    const inputHandler = (event) => {
        setInputVal({ ...inputVal, [event.target.name]: event.target.value });
    }
    const fileHandler = (event) => {
        //console.log(event.target.files[0]);
        setInputVal({ ...inputVal, [event.target.name]: event.target.files[0] });
    }

    const authorSignUp = async (event) => {
        event.preventDefault();
       // console.log(inputVal)
        const formData = new FormData();
        formData.append('author_name', inputVal.author_name)
        formData.append('author_email', inputVal.author_email)
        formData.append('author_password', inputVal.author_password);
        formData.append('author_image', inputVal.author_image);

        
       // console.log(formData)
       let res = await axios.post('http://localhost:5000/api/authorSignup', formData);
        console.log(res.data.message);
        setInputVal({
            "author_name": "",
            "author_email": "",
            "author_password": "",
        });
        alert(`${res.data.message}`)
    }
    return (<>
            <Header/>
        <div className="container">
            <div className="loginForm">
                <form onSubmit={authorSignUp}>
                    <h1 className='text-center mb-3 text-color'>Author Sign Up Page</h1>
                    <div className="mb-3">
                        <label htmlFor="input" className="form-label">Name</label>
                        <input value={inputVal.author_name} placeholder='Enter Your Name' type="input" required onChange={inputHandler} className="form-control" name='author_name' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email1" className="form-label">Email address</label>
                        <input value={inputVal.author_email} placeholder='Enter Your Email' type="email" required onChange={inputHandler} className="form-control" name='author_email' />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="author_password" className="form-label">Password</label>
                        <input value={inputVal.author_password} placeholder='Enter Your Password' type="password" required onChange={inputHandler} className="form-control" name='author_password' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="author_image" className="form-label">Upload Image</label>
                        <input type="file"  required onChange={fileHandler} className="form-control" name='author_image' />
                    </div>
                    <button type="submit" className="btn btn-primary animation-bottom">Sign Up</button>
                </form>
            </div>
        </div>
    </>
    )
}

