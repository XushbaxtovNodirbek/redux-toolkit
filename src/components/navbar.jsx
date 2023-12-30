import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="d-flex justify-content-between align-items-center px-4">
          <Link to={'/'}>
              <img width={60} src="./logo.png" alt="logo" />
          </Link>
          <div>
            <Link to={'/login'}>
              <label className='btn btn-outline-warning me-2'>Login</label>
            </Link>
            <Link to={'/register'}>
              <label className='btn btn-warning'>Register</label>
            </Link>
          </div>
        </div>
        <hr className='border border-1 border-warning'/>
      </header>
    </>
  )
}

export default Navbar