import React from 'react'

const App = () => {
  // localStorage.setItem('user','Hemant')
  // localStorage.setItem('age','20')
  // localStorage.setItem('hobby','reading')
  // const user = localStorage.getItem('user')
  // const age = localStorage.getItem('age')
  // const hobby = localStorage.getItem('hobby')

  // localStorage.removeItem('hobby')

  // localStorage.clear()

  // console.log(user,age,hobby);

  const user = {
    username:'Hemant',
    age:'20',
    location:'nashik'
  }

  localStorage.setItem('user',JSON.stringify(user))

  const usera = JSON.parse(localStorage.getItem('user'))

  console.log(usera);
  
  

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App