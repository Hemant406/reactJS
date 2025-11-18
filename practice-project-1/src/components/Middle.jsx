import React from 'react'

const Middle = () => {
  return (
    <div className='mt-20 flex justify-center gap-5 '>
      <div className='w-1/2 h-[300px] overflow-hidden rounded-3xl relative'>
        <img src="https://img.freepik.com/premium-photo/single-dandelion-flower-with-bright-pink-stem-growing-vibrant-purple-background-great-nature-garden-floralthemed-images_153912-312279.jpg" alt="flower" className='object-cover h-full w-full' />
        <div className='absolute inset-0 p-5 flex flex-col justify-between'>
            <h1 className='text-3xl font-medium'>Capital that grows</h1>
            <h4 className='text-lg text-gray-700 font-medium'>Earn passive income as your <br /> stablecoins are deployed into high- <br />performing DeFi protocols</h4>
        </div>
      </div>
      <div className='w-1/2 flex justify-center gap-5'>
        <div className='w-1/2 bg-gray-700 rounded-3xl p-5 flex flex-col justify-between'>
            <h2 className='text-3xl text-gray-300'>Always liquid,<br /> always stable</h2>
            <h4 className='text-lg text-gray-400 font-medium'>Stay fully dollar-pegged with instant access to your funds - no lockups or delays.</h4>
        </div>
        <div className='w-1/2 bg-gray-700 rounded-3xl p-5 flex flex-col justify-between'>
            <h1 className='text-3xl text-gray-300'>100% <br />hands-free</h1>
            <h1 className='text-lg text-gray-400 font-medium'>No need to manage strategies manually. USD Bloom works in the background for you. </h1>
        </div>
      </div>
    </div>
  )
}

export default Middle
