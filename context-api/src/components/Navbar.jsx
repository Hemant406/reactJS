import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
  const [theme] = useContext(ThemeDataContext)
  return (
    <div id={theme} className='flex justify-between items-center bg-cyan-700 text-white px-10 py-5'>
      <h3 className='text-2xl'>HemantCodes</h3>
      <Nav2/>
    </div>
  )
}

export default Navbar
