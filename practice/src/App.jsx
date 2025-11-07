import React, { useState } from 'react'

const App = () => {
  // usestate --> normal
  const [num, setNum] = useState(0)
    const increaseOnClick = () => {
     setNum(num+1)
  }
  const decreaseOnClick = () => {
    if(num > 0){
      setNum(num-1)
    }
  }

  // usestate for arrays :
  const [arr, setArr] = useState([10,20,30])
  const changeVal = () =>{
    let newArr = [...arr]
    newArr.push(27) 
    setArr(newArr)
  }

  // usestate for objects
  const [user, setUser] = useState({name:'Hemant',age:20})
  const changeUser = () =>{
    let newUser = {...user}
    if(newUser.name == 'Hemant'){
      newUser.name = 'Nilesh'
      newUser.age = 22
      setUser(newUser) 
    }else{
      newUser.name = 'Hemant'
      newUser.age = 20
      setUser(newUser) 
    }
  }

  // usestate for form
  const [text, setText] = useState('')
  const prevent = (e) =>{
    e.preventDefault()
    console.log("form submitted!!!")
    setText('')
  }




  return (
    <>
      <div className='counter'>
        <h1>{num}</h1>
        <div>
          <button onClick={increaseOnClick}>Increase</button>
          <button onClick={decreaseOnClick}>Decrease</button>
        </div>
      </div>
      <div className="arrays">
        <h1>Values in the array are {arr}</h1>
        <button onClick={changeVal}>Change Val</button>
      </div>
      <div className="objects">
        <h1> {user.name} , {user.age}</h1>
        <button onClick={changeUser}>Change User</button>
      </div>
      <div>
        <form onSubmit={prevent}>
          <input 
          type="text" 
          value={text}
          placeholder='Enter your name'
          onChange={(e)=>{
            setText(e.target.value)
          }}
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App