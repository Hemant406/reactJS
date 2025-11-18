import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='mt-5 relative'>
        <img src="https://img.freepik.com/premium-photo/light-purple-flowers-with-gradient-from-light-dark-purple-flowers-are-focus-have-blurred-background_14117-80809.jpg" alt="hero image" className='w-full rounded-4xl'/>
        <div className='absolute inset-0 top-[15%] flex flex-col items-center text-center'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDtd33oGIrSlqpcPkkM59nbDEVEtNFQE6Q7Q&s" alt="logo" className='w-15 mix-blend-multiply' />
            <h1 className='text-6xl text-gray-800'>Where Money Grows</h1>
            <h4 className='text-gray-700 font-semibold text-xl mt-5'>A programmable,utility-driven stable token<br />designed for native value accrual and seamless <br />integration into DeFi</h4>
            <button className='py-2 px-8 bg-black rounded-full text-gray-300 font-semibold mt-5 hover:bg-gray-800 active:scale-95 cursor-pointer'>Try it now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
