import React from 'react'

const App = () => {
  const btnClicked = () => {
    console.log('button clicked');
  }

  const changing = (val) => {
    console.log(val);
    
  }

  return (
    <div>
      <div className='page1'>
        <button onClick={btnClicked} style={{padding:'10px',margin:'10px'}}>Click</button>
      </div>
      <div className='page2'>
        <input onChange={(elem) => {
          changing(elem.target.value)
        }} type="text" placeholder='Enter your text here' style={{padding:'10px',margin:'10px'}}/>
      </div>
      <div className='page3'></div>
    </div>
  )
}

export default App