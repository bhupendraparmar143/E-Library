import React from 'react'
import { Link } from 'react-router-dom'

import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

export const Side_NavBar = () => {
  return (
    <div className="col-md-2 border bg-light">
      <button type="button" className="btn" data-bs-toggle="collapse" data-bs-target="#demo">DASHBORD</button>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 collapse" id='demo'>
        <li className='nav-item'>
          <Link href="#" className='nav-link'><i class="fa-regular fa-user fa-flip mx-2"></i><span>Your Profile</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-regular fa-user-pen mx-2 fa-spin"></i><span>Manage</span>
          </Link>
          {/* <button className="btn" data-bs-toggle="dropdown" data-bs-target="#admin">Admin</button> */}
          <ul className="dropdown-menu" id='admin'>
            <li><Link className="dropdown-item" to="#">Edit Your Profile</Link></li>
            <li><Link className="dropdown-item" to="#">Manage Author</Link></li>
            <li><Link className="dropdown-item" to="#">Manage Books</Link></li>
            <li><Link className="dropdown-item" to="#">Manage Users</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-regular fa-book mx-2 fa-shake"></i><span>Books Category</span>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">Web Developement Books</Link></li>
            <li><Link className="dropdown-item" to="#">Art & Photography Books</Link></li>
            <li><Link className="dropdown-item" to="#">Business & Money Books</Link></li>
            <li><Link className="dropdown-item" to="#">Health & Fitness Books</Link></li>
            <li><Link className="dropdown-item" to="#">History Books</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-regular fa-chart-line fa-beat mx-2"></i><span>Activity</span>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">Liked Books</Link></li>
            <li><Link className="dropdown-item" to="#">My Cart</Link></li>
            <li><Link className="dropdown-item" to="#">Recently Viewed Books</Link></li>
          </ul>
        </li>
        <li className="nav-item text-end">
          <Link type='button' className="btn btn-danger" to="#">Log Out</Link>
        </li>
      </ul>
    </div>
  )
}
