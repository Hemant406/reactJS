import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-6 px-18' >
        <button className="bg-gray-900 px-6 py-2 text-white rounded-full uppercase tracking-widest font-semibold cursor-pointer">
            target audience
          </button>
        <button className="bg-gray-200 px-6 py-2 rounded-full uppercase tracking-widest font-semibold cursor-pointer">
            digital banking platform
        </button>
    </div>
  )
}

export default Navbar