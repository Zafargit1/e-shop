import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'

export const backend_url = 'http://localhost:4000';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Admin/>
    </div>
  )
}

export default App
