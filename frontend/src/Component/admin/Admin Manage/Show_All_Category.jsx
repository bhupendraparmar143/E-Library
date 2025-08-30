import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './manage.css'

export const Show_All_Category = () => {
    const [allCategoryRecords, setAllCategoryRecords] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/api/getAllcategory`).then((res) => {
            // console.log(res.data.cateData)
            setAllCategoryRecords(res.data.cateData)
        })
    }, [])
    // console.log(allAuthorRecords)
    return (
        <div className='container-fluid'>
            <div className="row">
                <h2 className='text-center pb-3'>All  Authors</h2>
                {allCategoryRecords.map((items, index) => {
                    return (
                        <div className="col-md-2" key={index}>
                            <div className="card-body category_box">
                                <h3 className='card-title'>{items.category}</h3>
                                <button className='btn btn-danger btn-sm m-2'>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
