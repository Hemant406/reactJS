import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex items-center gap-4'>
        <div className='bg-red-400 w-[45%] mt-15 rounded-2xl flex flex-col justify-between items-center p-4 '>
          <h2 className='font-bold text-3xl '>{data.taskCounts.newTask}</h2>
          <h3 className='font-bold text-3xl '>New</h3>
        </div>
        <div className='bg-blue-400 w-[45%] mt-15 rounded-2xl flex flex-col justify-between items-center p-4 '>
          <h2 className='font-bold text-3xl '>{data.taskCounts.completed}</h2>
          <h3 className='font-bold text-3xl flex items-center justify-center'>Completed</h3>
        </div>
        <div className='bg-green-400 w-[45%] mt-15 rounded-2xl flex flex-col justify-between items-center p-4 '>
          <h2 className='font-bold text-3xl '>{data.taskCounts.active}</h2>
          <h3 className='font-bold text-3xl '>Accepted </h3>
        </div>
        <div className='bg-yellow-400 w-[45%] mt-15 rounded-2xl flex flex-col justify-between items-center p-4 '>
          <h2 className='font-bold text-3xl '>{data.taskCounts.failed}</h2>
          <h3 className='font-bold text-3xl '>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumber
