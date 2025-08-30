import React, { useEffect, useState } from 'react'
import './author.css';
import { Author_Side_NavBar } from './Author_Side_NavBar';
import { DiDatabase } from 'react-icons/di'
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Add_New_Category } from '../categories/Add_New_Category';
import { Add_New_Book } from '../Books/Add_New_Book';

export const AuthorDashbord = () => {

  return (
    <section>

      <div className="container-fluid">
        <div className="row">
          {/* right column */}
          <Author_Side_NavBar />
          {/* left column */}
          <div className="col-md-9 mx-auto">
            <div className="row">
              <div className="col-md-6">
                <div className='m-2 bg-000A9FF'>
                  <h2 className='text-center'>Your Followers</h2>
                  <div className="row">
                    <div className="col-md-5">
                      <h6>Total Followers  : </h6>
                      <h6>Active Followers  : </h6>
                      <h6>Inactive Followers  : </h6>
                    </div>
                    <div className="col-md-3 text-center">
                      <h6>100</h6>
                      <h6>80</h6>
                      <h6>20</h6>
                    </div>
                    <div className="col-md-4">
                      <DiDatabase style={{ fontSize: "75px", color: "red" }} />
                    </div>
                  </div>
                  <div className='text-end me-2 mb-2'>
                    <button className='btn btn-info m-1'>Show All Followers</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className='m-2 bg-000A9FF'>
                  <h2 className='text-center'>Uploaded Books</h2>
                  <div className="row">
                    <div className="col-md-5">
                      <h6>Total Books : </h6>
                      <h6>Most Viewed Books : </h6>
                    </div>
                    <div className="col-md-3 text-center">
                      <h6>100</h6>
                      <h6>80</h6>
                    </div>
                    <div className="col-md-4">
                      <DiDatabase style={{ fontSize: "75px", color: "red" }} />
                    </div>
                  </div>
                  <div className='text-end me-2 mb-2'>
                    <Link className='btn btn-info me-1' data-bs-toggle="modal" data-bs-target="#addNewBook" type='button'>Add new Book</Link>
                    <Link className='btn btn-info' to='/show-logged-in-author-book'>Show All Books</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className='m-2 bg-000A9FF'>
                  <h2 className='text-center'>Prime Users</h2>
                  <div className="row">
                    <div className="col-md-5">
                      <h6>Total Prime Users  : </h6>
                      <h6>Active Prime Users  : </h6>
                      <h6>Inactive Prime Users  : </h6>
                    </div>
                    <div className="col-md-3 text-center">
                      <h6>1000</h6>
                      <h6>800</h6>
                      <h6>200</h6>
                    </div>
                    <div className="col-md-4">
                      <DiDatabase style={{ fontSize: "75px", color: "red" }} />
                    </div>
                  </div>
                  <div className='text-end me-2 mb-2'>
                    <button className='btn btn-info m-1'>Show All Users</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className='m-2 bg-000A9FF'>
                  <h2 className='text-center'>Liked Books</h2>
                  <div className="row">
                    <div className="col-md-5">
                      <h6>Total Liked Books  : </h6>
                    </div>
                    <div className="col-md-3 text-center">
                      <h6>10</h6>
                    </div>
                    <div className="col-md-4">
                      <DiDatabase style={{ fontSize: "75px", color: "red" }} />
                    </div>
                  </div>
                  <div className='text-end me-2 mb-2'>
                    <button className='btn btn-info m-1'>Show All Liked Books</button>
                  </div>
                </div>
              </div>

            </div>
            <Add_New_Book />
          </div>
        </div>
      </div>
    </section>
  )
}
