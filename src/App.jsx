import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      
      {/* navbar */}
      <Navbar></Navbar>
      
      <Outlet></Outlet>

    </>
  )
}

export default App
