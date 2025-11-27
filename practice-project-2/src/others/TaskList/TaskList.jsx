import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './newTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'


const TaskList = ({data}) => {
  return (
    <div id='scroll' className='h-[55%] flex items-center gap-5 py-5 w-full overflow-x-auto mt-10'>
      {data.tasks.map((elem,idx) =>{
        if(elem.active){
          return <AcceptTask key={idx} data={elem} />
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem}/>
        }
        if(elem.newTask){
          return <NewTask key={idx} data={elem}/>
        }
        if(elem.completed){
          return <CompletedTask key={idx} data={elem}/>
        }
      })}
      
      
      
      
      
      
      
    </div>
  )
}

export default TaskList
