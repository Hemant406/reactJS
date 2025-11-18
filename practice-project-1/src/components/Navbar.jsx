import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDtd33oGIrSlqpcPkkM59nbDEVEtNFQE6Q7Q&s" alt="icon" className='w-15 ' />
        <h2 className='text-gray-500 font-semibold text-xl'>BloomFi</h2>
      </div>
      <div className='flex items-center gap-8 text-gray-500 font-semibold'>
        <h2>USDbloom</h2>
        <h2>Business</h2>
        <h2>Treasury</h2>
        <h2>Developers</h2>
        <h2>Join us</h2>
      </div>
      <div>
        <button className='py-2 px-8 bg-black hover:bg-gray-700 active:scale-95 rounded-full text-gray-300 font-semibold cursor-pointer' >Launch BETA</button>
      </div>
    </div>
  )
}

export default Navbar
