import React from 'react'

const Upper = () => {
  return (
    <div className='flex items-center justify-between mt-20'>
      <div className='w-1/2 flex flex-col gap-5'>
        <h1 className='text-4xl font-semibold'>What is USD Bloom?</h1>
        <button className='py-2 px-8 bg-black hover:bg-gray-700 active:scale-95 rounded-full text-gray-300 font-semibold cursor-pointer w-fit'>Explore now</button>
      </div>
      <div className='w-1/2 flex justify-end'>
        <h1 className='w-2/3 text-2xl text-gray-500 font-semibold'>USD Bloom is a yeild-bearing stablecoin that helps your capital grow while staying pegged to the U.S.Dollar </h1>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Upper
