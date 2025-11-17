import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Courses from './pages/Courses'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Kids from './pages/Kids'
import Women from './pages/Women'
import CourseDetail from './pages/CourseDetail'

const App = () => {
  return (
    <div className='h-screen  text-white bg-gray-700'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<Product/>} >
          <Route path ='men' element={<Men/>}/>
          <Route path ='women' element={<Women/>}/>
          <Route path ='kids' element={<Kids/>}/>
        </Route>
        <Route path='/courses' element={<Courses/>} />
        <Route path='/courses/:id' element={<CourseDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App