import React, { useState } from 'react'
import './author.css'
import { Link, useNavigate } from 'react-router-dom'
import { RiAdminLine } from 'react-icons/ri';
import { ImBooks } from 'react-icons/im'
import { LuActivity } from 'react-icons/lu'
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

export const Author_Side_NavBar = () => {
  const Navigate = useNavigate()
  const [authorNavbarWidth, setAuthorNavbarWidth] = useState(true);
  const rightAero = () => {
    // console.log("hello")
    if (authorNavbarWidth == true) {
      setAuthorNavbarWidth(false);
    }
    else {
      setAuthorNavbarWidth(true)
    }
    // console.log(authorNavbarWidth)
  }
  const authorLogout = () => {
    // let res = localStorage.setItem('token_data' , '')
    // console.log(res);
    Navigate('/authorLogin')

  }
  return (
    <div className={(authorNavbarWidth == true) ? 'col-md-3 widthAnimation' : 'col-md-1 authorNavWidth widthAnimation'}>
      {/* <div> */}
      {authorNavbarWidth == true ?
        <div className='fullWidthAuthorDashbord'>
          <div>
            <h3>Author DashBord <Link onClick={rightAero}><FaAngleDoubleLeft className='mx-2' style={{ fontSize: '1.5rem' }} /></Link> </h3>
          </div>
          <div className="content">
            <Link className='nav-link m-4'><RiAdminLine className='mx-2 fa-flip' style={{ fontSize: '1.5rem' }} />Your Profile</Link>
            <Link className='nav-link m-4'><ImBooks className='mx-2 fa-beat' style={{ fontSize: '1.5rem' }} />Your Books</Link>
            <Link className='nav-link m-4'><RiAdminLine className='mx-2 fa-flip' style={{ fontSize: '1.5rem' }} />Followers</Link>
            {/* <Link className='nav-link m-4'><LuActivity className='mx-2 fa-beat' style={{ fontSize: '1.5rem' }} />Categories</Link> */}
            <div className='text-end me-2'>
              <button className='btn btn-danger' onClick={authorLogout}><LuActivity className='mx-2 fa-beat' style={{ fontSize: '1.5rem' }} />Logout</button>
            </div>
          </div>
        </div >
        : <>
          <Link onClick={rightAero}><FaAngleDoubleRight className='mx-2' style={{ fontSize: '1.5rem' }} /></Link>
          <Link className='nav-link mt-4'><RiAdminLine className='mx-2 fa-flip' style={{ fontSize: '1.5rem' }} /></Link>
          <Link className='nav-link mt-4'><ImBooks className='mx-2 fa-beat' style={{ fontSize: '1.5rem' }} /></Link>
          <Link className='nav-link mt-4'><RiAdminLine className='mx-2 fa-flip' style={{ fontSize: '1.5rem' }} /></Link>
          <Link className='nav-link mt-4'><LuActivity className='mx-2 fa-beat' style={{ fontSize: '1.5rem' }} /></Link>
        </>
      }
    </div >

  )
}
