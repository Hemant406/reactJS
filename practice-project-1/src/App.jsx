import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Content from './components/Content'

const App = () => {
  return (
    <div className='py-5 px-10'>
      <Navbar />
      <Hero/>
      <Content/>
    </div>
  )
}

export default App
