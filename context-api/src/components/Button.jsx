import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {
  const [theme,setTheme] = useContext(ThemeDataContext)
  const change = () => {
    if(theme=='light'){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }
  return (
    <div className='mt-5'>
      <button onClick={change} className='text-white active:scale-95 cursor-pointer px-8 py-4 border-0 bg-blue-500 rounded'>Change Theme</button>
    </div>
  )
}

export default Button
