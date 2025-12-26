import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count+1);
  }

  const decrease = () =>{
    if(count > 0){
      setCount(count-1)
    }else{
      setCount(0)
    }
  }
  return (
    <div className='h-screen w-full bg-red-400 flex items-center justify-center'>
      <div className='bg-gray-500 flex flex-col justify-between items-center p-10 rounded-xl' >
        <h1 className='text-white font-semibold text-3xl '>
          {count}
        </h1>
        <div className='flex items-center gap-5 mt-5'>
          <button onClick={increase} className='bg-blue-500 py-2 px-6 rounded-lg text-white font-semibold text-md cursor-pointer active:scale-95'>Increase</button>
          <button onClick={decrease} className='bg-red-500 py-2 px-6 rounded-lg text-white font-semibold text-md cursor-pointer active:scale-95'>Decrease</button>
        </div>
      </div>
    </div>
  )
}

export default App
