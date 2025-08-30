import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../Header'

export const Books_Related_Category = () => {
  let { categoryName } = useParams();
  const [booksByCategory, setBooksByCategory] = useState([]);
  // console.log(categoryName)
  useEffect(() => {
    axios.get(`http://localhost:5000/api/getBooksByCategory/${categoryName}`).then((res) => {
      // console.log(res.data.booksByCategory);
      setBooksByCategory(res.data.booksByCategory)
    })
  }, [])
  return (
    <>
      <Header />
      <div className="container-fluid books_Related_Category_page_bg">
        <div className="row">
          <h2 className='books_Related_Category_Name'>{categoryName} Books</h2>

          {booksByCategory.map((item, index) => {
            // console.log(item)
            return (
              <div class="col-md-2">
                <img src={process.env.REACT_APP_IMAGE_PATH + 'books/' + item.book_image} class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">{item.book_name}</h5>
                  {/* <p class="card-text">{item.author}</p> */}
                  <p class="card-text">{item.description.slice(0, 10)}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
