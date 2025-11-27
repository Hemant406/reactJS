import React, { useContext, useEffect, useState } from 'react'
import LoginPage from './pages/LoginPage'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {
  
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser);
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
  }, [])
  
  

  const handleLogin = (email,password) =>{
    if(email == 'admin@me.com' && password == '123'){
      const admin = authData.admin.find((e)=>email== e.email && password == e.password)
      if(admin){
        setUser('admin')
        setLoggedInUserData(admin)
        localStorage.setItem("loggedInUser",JSON.stringify({role:'admin',data:admin}))
      }
    }else if(authData){
      const employee = authData.employees.find((e)=>email== e.email && password == e.password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({role:'employee',data:employee}))
      }
    }else{
      alert('Invalid Credentials')
    }
  }
  return (
    <div className='bg-[#1c1c1c] min-h-screen'>
      {!user ? <LoginPage handleLogin = {handleLogin}/> : ' '}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} data={loggedInUserData} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    </div>
  )
}

export default App
