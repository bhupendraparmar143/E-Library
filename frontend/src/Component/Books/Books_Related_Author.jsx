import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './books.css';
import { Header } from '../Header'

export const Books_Related_Author = () => {
    let { author_name } = useParams();
    // console.log(author_name);
    const [allAuthorData, setAllAuthorData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/getAuthorsUsingId/${author_name}`).then((res) => {
            //    console.log(res.data);
            setAllAuthorData(res.data.booksData)
        })

    }, [])
    // console.log(allAuthorData)    
    return (<>
        <Header />
        <div className="container-fluid">
            <div className="row">
                <h2 className='books_Related_Author_Name'>{author_name + "'s"} All  Books</h2>
                {allAuthorData.map((items, index) => {
                    return (
                        <div className="col-md-4 books_Related_Author_Card">
                            <div>
                                <img className='' src={process.env.REACT_APP_IMAGE_PATH + 'books/' + items.book_image} alt="" />
                            </div>
                            <div className="card-body">
                                <h2 className='card-title'>{items.book_name}</h2>
                                {/* <h2 className='card-text'>{items.author}</h2> */}
                                <h5 className='card-text'>{items.book_category}</h5>
                                <h6 className='card-text'>{items.description.slice(0, 10)}</h6>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
    )
}
