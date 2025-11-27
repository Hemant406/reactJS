import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const [newTask, setNewTask] = useState({})
  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({taskTitle,taskDate,taskDescription,category,active:false,completed:true,failed:false,newTask:true})
    const data = JSON.parse(localStorage.getItem('employees'))

    data.forEach(elem => {
      if(assignTo == elem.firstName){
        elem.tasks.push(newTask)
        localStorage.setItem("employees",JSON.stringify(data))
        elem.taskCounts.newTask += 1;
      }
      
    });

    setTaskDescription('')
    setCategory('')
    setAssignTo('')
    setTaskDate('')
    setTaskTitle('')
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="mt-10"
      >
        <div className="flex items-start justify-evenly bg-gray-800 py-5 rounded-2xl ">
          <div className="flex flex-col justify-center gap-5 w-2/5">
            <div>
              <h3 className="text-xl font-semibold ">Task Title</h3>
              <input
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
                value={taskTitle}
                className="border border-emerald-300 px-5 py-2 rounded-lg outline-none mt-1 w-4/5"
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold ">Date</h3>
              <input
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
              value={taskDate}
                className="border border-emerald-300 px-5 py-2 rounded-lg outline-none mt-1 w-4/5"
                type="date"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold ">Assign to</h3>
              <input
              onChange={(e)=>{
                setAssignTo(e.target.value)
              }}
              value={assignTo}
                className="border border-emerald-300 px-5 py-2 rounded-lg outline-none mt-1 w-4/5"
                type="text"
                placeholder="Employee name"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold ">Category</h3>
              <input
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              value={category}
                className="border border-emerald-300 px-5 py-2 rounded-lg outline-none mt-1 w-4/5"
                type="text"
                placeholder="Design,Development,etc."
              />
            </div>
          </div>
          <div className="w-2/5 flex flex-col gap-5">
            <div>
              <h3 className="text-xl font-semibold ">Description</h3>
              <textarea
              onChange={(e)=>{
                setTaskDescription(e.target.value)
              }}
              value={taskDescription}
                className="border border-emerald-300 px-5 py-2 rounded-lg outline-none mt-1 w-full"
                rows={10}
                cols={40}
                placeholder="Detailed description of task max 500 words"
              ></textarea>
            </div>

            <button className="bg-black px-5 py-2 font-semibold text-lg rounded-xl cursor-pointer active:scale-95 w-full ">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
