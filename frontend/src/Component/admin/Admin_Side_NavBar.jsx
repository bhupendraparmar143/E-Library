import React, { useState } from 'react'
import './admin.css'
import { Link, useNavigate } from 'react-router-dom'
import { RiAdminLine } from 'react-icons/ri';
import { ImBooks } from 'react-icons/im'
import { LuActivity } from "react-icons/lu";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

export const Admin_Side_NavBar = () => {
  const Navigate = useNavigate()
  const [adminNavbarWidth, setAdminNavbarWidth] = useState(true);
  const rightAero = () => {
    // console.log("hello")
    if (adminNavbarWidth == true) {
      setAdminNavbarWidth(false);
    }
    else {
      setAdminNavbarWidth(true)
    }
    console.log(adminNavbarWidth)
  }
  const adminLogout = ()=>{
let res = localStorage.removeItem('token_data')
// console.log(res);
Navigate('/adminLogin')

  }
  return (
    <div className={(adminNavbarWidth == true) ? 'col-md-3 widthAnimation' : 'col-md-1 adminNavWidth widthAnimation'}>
      {/* <div> */}
      {adminNavbarWidth == true ?
        <div className='fullWidthAdminDashbord'>
          <div>
            <h3>Admin DashBord <Link onClick={rightAero}><FaAngleDoubleLeft className='mx-2' style={{ fontSize: '1.5rem' }} /></Link> </h3>
          </div>
          <div className="content">
            <Link className='nav-link m-4'><RiAdminLine className='mx-2 fa-flip' style={{ fontSize: '1.5rem' }} />Your Profile</Link>
            <Link className='nav-link m-4'><ImBooks className='mx-2 fa-beat' style={{ fontSize: '1.5rem' }} />Books</Link>
            <Link className='nav-link m-4'><RiAdminLine className='mx-2 fa-flip' style={{ fontSize: '1.5rem' }} />Authors</Link>
            <Link className='nav-link m-4'><LuActivity className='mx-2 fa-beat' style={{ fontSize: '1.5rem' }} />Categories</Link>
            <div className='text-end me-2'>
            <button className='btn btn-danger' onClick={adminLogout}><LuActivity className='mx-2 fa-beat' style={{ fontSize: '1.5rem' }} />Logout</button>
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
