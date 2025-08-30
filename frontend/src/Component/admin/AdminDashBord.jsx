import React, { useEffect, useState } from 'react'
import './admin.css';
import { Admin_Side_NavBar } from '../admin/Admin_Side_NavBar';
import { DiDatabase } from 'react-icons/di'
import axios, { all } from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Add_New_Category } from '../categories/Add_New_Category';

export const AdminDashBord = () => {
  const navigate = useNavigate()
  const [allCategory, setAllCategory] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/api/getallcategory').then((res) => {
      // console.log(res.data.cateData)
      setAllCategory(res.data.cateData);
    });
  }, [])
  // console.log(allCategory)
  const addNewCategory = () => {
    // console.log('test')
    navigate('/addNewCategory');
  }
  return (
    <section>
      <div className="container-fluid">
        <div className="row sidebar-position">
          {/* <div className="col-md-3"> */}
          <Admin_Side_NavBar />
          {/* </div> */}
          {/* right column */}
          {/* left column */}
          <div className="col-md-9 ">
            <div className="row">
              <div className="col-md-6">
                <div className='m-2 bg-00A9FF'>
                  <h2 className='text-center'>Author</h2>
                  <div className="row">
                    <div className="col-md-4">
                      <h6>Total Authors  : </h6>
                      <h6>Active Authors  : </h6>
                      <h6>Inactive Authors  : </h6>
                    </div>
                    <div className="col-md-4 text-center">
                      <h6>100</h6>
                      <h6>80</h6>
                      <h6>20</h6>
                    </div>
                    <div className="col-md-4">
                      <DiDatabase style={{ fontSize: "75px", color: "red" }} />
                    </div>
                  </div>
                  <div className='text-end me-2 mb-2'>
                    <Link className='btn btn-info' to='/show-all-authors'>Show All Authors</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className='m-2 bg-00A9FF'>
                  <h2 className='text-center'>Books</h2>
                  <div className="row">
                    <div className="col-md-4">
                      <h6>Total Books  : </h6>
                      <h6>Most Viewed Books  : </h6>
                    </div>
                    <div className="col-md-4 text-center">
                      <h6>100</h6>
                      <h6>80</h6>
                    </div>
                    <div className="col-md-4">
                      <DiDatabase style={{ fontSize: "75px", color: "red" }} />
                    </div>
                  </div>
                  <div className='text-end me-2 mb-2'>
                    <Link className='btn btn-info' to='/show-all-books'>Show All Books</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className='m-2 bg-00A9FF'>
                  <h2 className='text-center'>Users</h2>
                  <div className="row">
                    <div className="col-md-4">
                      <h6>Total Users  : </h6>
                      <h6>Active Users  : </h6>
                      <h6>Inactive Users  : </h6>
                    </div>
                    <div className="col-md-4 text-center">
                      <h6>1000</h6>
                      <h6>800</h6>
                      <h6>200</h6>
                    </div>
                    <div className="col-md-4">
                      <DiDatabase style={{ fontSize: "75px", color: "red" }} />
                    </div>
                  </div>
                  <div className='text-end me-2 mb-2'>
                    <button className='btn btn-info'>Show All Users</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className='m-2 bg-00A9FF'>
                  <h2 className='text-center'>Categories</h2>
                  <div className="row">
                    <div className="col-md-4">
                      <h6>Total Categories  : </h6>
                    </div>
                    <div className="col-md-4 text-center">
                      <h6>10</h6>
                    </div>
                    <div className="col-md-4">
                      <DiDatabase style={{ fontSize: "75px", color: "red" }} />
                    </div>
                  </div>
                  <div className='text-end me-2 mb-2'>
                    <button className='btn btn-info me-1' onClick={addNewCategory}>Add new Category</button>
                    <Link className='btn btn-info' to='/show-all-category' >Show All Categories</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
