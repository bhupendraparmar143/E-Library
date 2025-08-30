import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Show_All_Authors = () => {
    const [allAuthorRecords, setAllAuthorRecords] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/api/getallauthor`).then((res) => {
            // console.log(res.data.authorData)
            setAllAuthorRecords(res.data.authorData)
        })
    }, [])
    // console.log(allAuthorRecords)
    return (
        <div className='container-fluid'>
            <div className="row">
                <h2 className='text-center pb-3'>All  Authors</h2>
                {allAuthorRecords.map((items, index) => {
                    return (
                        <div className="col-md-2">
                            <div>
                                <img className='' src={process.env.REACT_APP_IMAGE_PATH + 'author/' + items.author_image} alt="" />
                            </div>
                            <div className="card-body">
                                <h3 className='card-title'>{items.author_name}</h3>
                                <h4 className='card-text'>{items.author_email}</h4>
                                <h5 className='card-text'>{items.book_category}</h5>
                                <h6 className='card-text'>{items.description}</h6>
                                <button className='btn btn-danger btn-sm'>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
