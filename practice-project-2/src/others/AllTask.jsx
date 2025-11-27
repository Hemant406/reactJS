import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {

  const authData = useContext(AuthContext)
  
  return (
    <div id='task' className='bg-gray-800 p-5 rounded-2xl mt-5'>
      <div className='bg-red-400 flex items-center justify-between mb-2 py-2 rounded-lg'> 
        <h2 className='w-1/5 text-lg font-medium text-center'>Name</h2>
        <h2 className='w-1/5 text-lg font-medium text-center'>New Tasks</h2>
        <h2 className='w-1/5 text-lg font-medium text-center'>Active Tasks</h2>
        <h2 className='w-1/5 text-lg font-medium text-center'>Completed Tasks</h2>
        <h2 className='w-1/5 text-lg font-medium text-center'>Failed Tasks</h2>
      </div>
      <div className=''>
      {authData.employees.map((elem,idx) => {
        return <div key={idx} className='border-2 border-emerald-600 flex justify-between mb-2 p-2 rounded-lg '> 
        <h2 className='w-1/5 text-lg font-medium text-center'>{elem.firstName}</h2>
        <h2 className='w-1/5 text-lg text-blue-500 font-medium text-center'>{elem.taskCounts.newTask}</h2>
        <h2 className='w-1/5 text-lg text-yellow-500 font-medium text-center'>{elem.taskCounts.active}</h2>
        <h2 className='w-1/5 text-lg text-green-500 font-medium text-center'>{elem.taskCounts.completed}</h2>
        <h2 className='w-1/5 text-lg text-red-500 font-medium text-center'>{elem.taskCounts.failed}</h2>
      </div>
      })}
      </div>
      
    </div>
  )
}

export default AllTask
