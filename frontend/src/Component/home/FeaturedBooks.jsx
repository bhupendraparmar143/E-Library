import React, { useState } from 'react';
import './featuredBooks.css';
import { useEffect } from 'react';
import WOW from 'wowjs';
import axios from 'axios';
import { Link } from 'react-router-dom'

export const FeaturedBooks = () => {
    const [allBooks, setAllBooks] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/showAllBook').then((res) => {
            // console.log(res.data)
            setAllBooks(res.data.all_books)
        })

        new WOW.WOW({
            live: false
        }).init();
    }, [])

    // console.log(allBooks)
    return (<div className="container-fluid">
        <div className='books-header'>
            <h1 className='heading'>Featured Books</h1>
            <hr className='heading-hr' />
            <p className='featured_book_Page_heading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, unde molestias explicabo aut, fuga expedita laudantium debitis necessitatibus enim fugiat at saepe nostrum in dolorem modi ducimus.</p>
        </div>
        <div className="row text-center pt-3">
            {allBooks.map((items, index) => {
                // console.log(items._id)
                return (
                    <div className="col-md-4 mb-2  books-hover wow animate__animated animate__bounce">
                        <Link to={`/showBookDetails/${items._id}`}>
                            <div>

                                <div className="books_show mx-2">
                                    <div className="img-border">
                                        <img src={process.env.REACT_APP_IMAGE_PATH + 'books/' + items.book_image} alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>{items.book_name}</h5>
                                        <h6 className='authorName'>{items.author}</h6>
                                        <h6 className='authorName'>{items.description}</h6>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
        <div className='text-center'>
            <button className='btn btn-secondary btn-bg mt-3'>Show All Books</button>
        </div>
    </div>
    )
}
