import React, { useState } from 'react'
import axios from 'axios';
import './categories.css'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const Add_New_Category = () => {
  const navigate = useNavigate()
  const [inputCategory, setinputCategory] = useState({
    "category": ""
  });
  const inputHandler = (event) => {
    // console.log(event.target.value);
    setinputCategory({ [event.target.name]: event.target.value });
  }
  const addCategory = async (event) => {
    event.preventDefault();
    // console.log(inputCategory);
    let res = await axios.post('http://localhost:5000/api/addNewCategory', inputCategory, {
      headers: {
        "Authorization": `Bearer ` + localStorage.getItem('token_data')
      }
    });
    console.log('res',res.data);
    alert(`${res.data.message}`)
    if(res.data.success){
      navigate('/adminDashBord')
    }
    setinputCategory({
      "category" : ''
    })
  
  
}
return (
  <div className="container">
    <ToastContainer />
    <form onSubmit={addCategory} className='addNewCategoryPage'>
      <div className="mb-3">
        <label htmlFor="category" className="form-label text-center">Add New Category</label>
        <input type="text" value={inputCategory.category} placeholder='Enter Category' required onChange={inputHandler} className="form-control" name='category' />
      </div>
      <button type='submit' className="btn btn-primary animation-bottom">Add Category</button>
    </form>
  </div>
)
}
