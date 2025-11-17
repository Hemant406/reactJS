import React from 'react'
import {Link, Outlet} from "react-router-dom"

const Product = (props) => {
  return (
    <div>
        <div className='flex justify-center items-center gap-5 py-5'>
            <Link to='/product/men'>Men</Link>
            <Link to='/product/women'>Women</Link>
            <Link to='/product/kids'>Kids</Link>
        </div>
        <Outlet/>
        
    </div>
  )
}

export default Product