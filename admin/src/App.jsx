import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'

export const backend_url = 'https://e-shop-backend-78uk.onrender.com';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Admin/>
    </div>
  )
}

export default App
