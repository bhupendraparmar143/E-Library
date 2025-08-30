import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../Header'

export const Book_Detail_Page = () => {
    let { bookId } = useParams()
    // console.log('book-id', bookId)
    const [allBooks, setAllBooks] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/showDetailedBook/${bookId}`).then((res) => {
            // console.log(res.data.bookRecord)
            setAllBooks(res.data.bookRecord)
        })
    }, [])


    return (
        <>
            <Header />
            <div className="container-fluid detailed_page_bg">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <img className='detailed_Book-image' src={process.env.REACT_APP_IMAGE_PATH + 'books/' + allBooks.book_image} alt="" />
                    </div>
                    <div className="col-md-8">
                        <h2><span className='detailed_page_content'>Book Name :</span> {allBooks.book_name}</h2>
                        <h4><span className='detailed_page_content'>Author :</span> {allBooks.author}</h4>
                        <h5><span className='detailed_page_content'>Category :</span> {allBooks.book_category}</h5>
                        <h5><span className='detailed_page_content'>Description :</span> {allBooks.description}</h5>
                        <button className='btn btn-info m-3'>Add To Cart</button>
                        <button className='btn btn-info m-3'>Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}
