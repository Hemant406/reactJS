import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([])
  
  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...task]
    copyTask.push({title,details})

    setTask(copyTask)
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) =>{
    const copyTask = [...task]

    copyTask.splice(idx,1) // splice method , given index se array ko todna chalu karegi aur agar baadme 1 hai toh 1 element todegi , isi tarah 2,3,4 hoga toh utne elements todegi
     
    setTask(copyTask)

  }


  return (
    <div className="bg-black">
      <div className="lg:flex text-white">
        <form
        onSubmit={submitHandler}
          className="w-1/2"
        >
          <div className="m-2 p-5 flex flex-col ">
            <h1 className="font-bold text-4xl mb-5 text-white" >Create Notes</h1>
            <input
              type="text"
              placeholder="Enter your title here"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="p-5 border-2 border-white outline-none rounded-2xl text-white placeholder:text-gray-200"
            />
            <textarea
              placeholder="Enter details here"
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);
              }}
              className="p-5 border-2 mt-5 h-[200px] border-white outline-none rounded-2xl text-white placeholder:text-gray-200"
            ></textarea>
            <div className="flex justify-center">
              <button
                className="py-2 px-6 mt-5 w-full text-white text-lg active:scale-95 hover:bg-blue-400
             bg-blue-500 rounded-xl cursor-pointer"
              >
                Add Notes
              </button>
            </div>
          </div>
        </form>

        <div className="lg:w-1/2 m-2 py-5 px-15 h-screen lg:border-l-2">
          <h1 className="font-bold text-4xl mb-5">Preview Notes</h1>
          <div id="over" className="flex flex-wrap gap-5 h-[90%] overflow-auto">
            {task.map(function(elem,idx){
              return <div key={idx} className="flex justify-between flex-col bg-[url('https://img.freepik.com/free-vector/leafy-patterned-note-background_53876-97734.jpg?semt=ais_hybrid&w=740&q=80')] rounded-xl w-40 h-52 text-black bg-cover p-4">
                <div>
                  <h3 className="leading-tight font-bold text-xl mb-3">{elem.title}</h3>
                  <p className="text-gray-500">{elem.details}</p>
                </div>
                <button onClick={() => {
                  deleteNote(idx)
                }} className="bg-red-600 text-white py-1 rounded active:scale-95 cursor-pointer ">Delete Note</button>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
