import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='flex items-center justify-between px-8 py-5 bg-gray-500'>
        <h3 className='text-2xl font-semibold cursor-pointer'>HemantCodes</h3>
        <div className='flex items-center gap-7 text-lg font-medium '>
            <Link className='hover:text-blue-500' to='/'>Home</Link>
            <Link className='hover:text-blue-500' to='/about'>About</Link>
            <Link className='hover:text-blue-500' to='/courses'>Courses</Link>
            <Link className='hover:text-blue-500' to='/product'>Product</Link>
        </div>
    </div>
  )
}

export default Header