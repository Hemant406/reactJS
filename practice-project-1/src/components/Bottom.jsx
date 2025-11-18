import React from 'react'

const Bottom = () => {
  return (
    <div className='flex  mt-10'>
      <div className='w-1/2 flex flex-col'>
        <h4 className='text-gray-400 font-semibold'>USD Bloom in Action</h4>
        <h2 className='text-6xl font-semibold'>Use cases</h2>
        <h4 className='text-lg text-gray-400 font-medium mt-5'>USD Bloom offers a variety of use cases for <br /> developers, businesses and treasuries seeking <br /> secure and profitable stablecoin integrations</h4>
      </div>
      <div className='w-1/2 overflow-hidden rounded-3xl relative'>
        <img src="https://img.freepik.com/free-photo/3d-cash-money_23-2151344862.jpg?semt=ais_incoming&w=740&q=80" alt="bank" className='object-cover h-full w-full rotate-y-180' />
        <div className='absolute inset-0 left-[51%] flex flex-col p-5 '>
            <h2 className='text-4xl font-semibold'>Business</h2>
            <h4 className='text-lg text-gray-600 font-medium mt-5'>Boost your engagement by offering USD Bloom , a secure flat-backend stablecoin with high yeilds, allowing your customers to earn effortlessly on your platform</h4>
            <div className='flex items-center gap-2 mt-5'>
                <div className='rounded-full w-5 h-5 flex items-center bg-gray-50 justify-center'>
                    <i className="ri-arrow-right-line"></i>
                </div>
                <h4 className='text-gray-500'>Learn more</h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Bottom
