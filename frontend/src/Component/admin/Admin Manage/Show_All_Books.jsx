import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Show_All_Books = () => {
    const [allBooksRecords, setAllBooksRecords] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/showAllBook`).then((res) => {
            // console.log(res.data.all_books)
            setAllBooksRecords(res.data.all_books)
        })
    }, [])
    return (
        <div className='container-fluid'>
            <div className="row">
                <h2 className='text-center'>All  Books</h2>
                {allBooksRecords.map((items, index) => {
                    return (
                        <div className="col-md-2">
                            <div>
                                <img className='' src={process.env.REACT_APP_IMAGE_PATH + 'books/' + items.book_image} alt="" />
                            </div>
                            <div className="card-body">
                                <h3 className='card-title'>{items.book_name}</h3>
                                <h4 className='card-text'>{items.author}</h4>
                                <h5 className='card-text'>{items.book_category}</h5>
                                <h6 className='card-text'>{items.description.slice(0, 10)}</h6>
                                <button className='btn btn-danger btn-sm'>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
