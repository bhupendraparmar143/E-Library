import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './books.css';


export const Add_New_Book = () => {
  const [inputBook, setInputBook] = useState({
    "book_name": "",
    "book_category": "",
    "author": "",
    "description": "",
    "book_image": ""
  })
  const inputHandler = (event) => {
    setInputBook({ ...inputBook, [event.target.name]: event.target.value });
  }
  const fileHandler = (event) => {
    setInputBook({ ...inputBook, [event.target.name]: event.target.files[0] });
  }
  // get category
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/getAllcategory').then((res) => {
      // console.log(res.data.cateData)
      setCategoryData(res.data.cateData);
    });
  }, [categoryData])
  // console.log(categoryData)

  const addNewBook = async (event) => {
    event.preventDefault();
    // console.log(inputBook)
    let formData = new FormData();
    formData.append('book_name', inputBook.book_name)
    formData.append('book_category', inputBook.book_category)
    formData.append('author', inputBook.author)
    formData.append('description', inputBook.description)
    formData.append('book_image', inputBook.book_image)

    // console.log(formData)
    let res = await axios.post('http://localhost:5000/authorDashbord', formData);
    alert(`${res.data.massage}`)
  }
  return (
    <div className="modal" id="addNewBook">
      <div className="modal-dialog">
        <div className="modal-content">

          {/* <!-- Modal Header --> */}
          <div className="modal-header">
            <h4 className="modal-title">Modal Heading</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          {/* <!-- Modal body --> */}
          <div className="modal-body">
            <div>
              <form onSubmit={addNewBook} method='post' encType="multipart/form-data">
                <div className="mb-3">
                  <label htmlFor="book_name" className="form-label">Book Name</label>
                  <input type="text" required onChange={inputHandler} className="form-control" name='book_name' />
                </div>
                <div className=''>
                  <label htmlFor="book_category" className="form-label">Book Category</label>
                  <input type="text" required onChange={inputHandler} className="form-control" name='book_category' />
                  {/* <select className="form-select" aria-label="Default select example">
                    <option selected>Select Book Category</option>
                    {categoryData.map((items, index) => {
                      return(
                        <option onChange={inputHandler} name='book_category' value={this.items.category}>{items.category}</option>
                        )
                    })}
                    </select> */}
                </div>
                <div>
                  <label htmlFor="author" className="form-label">Book's Author</label>
                  <input type="text" required onChange={inputHandler} className="form-control" name='author' />
                </div>
                <div>
                  <label htmlFor="description" className="form-label">Book Description</label>
                  <input type="text" required onChange={inputHandler} className="form-control" name='description' />
                </div>
                <div>
                  <label htmlFor="book_image" className="form-label">Book Image</label>
                  <input type="file" required onChange={fileHandler} className="form-control" name='book_image' />
                </div>
                <button type='submit' className="btn btn-primary animation-bottom">Add Book</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
