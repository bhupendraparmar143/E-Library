import React, { useEffect, useState } from 'react'
import './category.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

export const Category = () => {
    const [categoryData, setCategoryData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/getAllcategory').then((res) => {
            // console.log(res.data.cateData)
            setCategoryData(res.data.cateData);
        });
    }, [])
    // console.log(categoryData)
    return (
        <div className='container'>
            <div className="category-header">
                <h1>Category</h1>
                <hr />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta obcaecati architecto quisquam repellat non! Expedita dolorem</p>
            </div>
            <div className="row category-blog">
                {categoryData.map((item, index) => {
                    // console.log(item.category)
                    return (
                        <div className="col-md-3">
                            <div className='inner-category'>
                                <div className="category-desine">
                                    <Link to={`/booksRelatedCategory/${item.category}`} style={{textDecorationLine : "None",color : 'black'}}>
                                        <h3>{item.category}</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
